// Subscribe handler — forwards to Buttondown's API server-side.
//
// Why server-side: Buttondown's embed-subscribe endpoint
// (https://buttondown.com/api/emails/embed-subscribe/<slug>) is now gated
// behind Cloudflare Turnstile, so raw client-side form POSTs fail with
// HTTP 400 + a Turnstile widget HTML response. The API endpoint is the
// supported machine-to-machine path; no CAPTCHA, no JS widget needed.
//
// Setup: set BUTTONDOWN_API_KEY in Vercel environment variables (Production
// + Preview). Generate the key in Buttondown dashboard → Settings → API.
// Never put the key in client code or in a public file — this handler runs
// server-side only.

const BUTTONDOWN_API_URL = 'https://api.buttondown.com/v1/subscribers'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body || {}
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY
  if (!apiKey) {
    // Server misconfigured — log loudly, return generic to client.
    console.error('[subscribe] BUTTONDOWN_API_KEY not set in env')
    return res.status(500).json({ error: 'Subscription service unavailable' })
  }

  try {
    const upstream = await fetch(BUTTONDOWN_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: email }),
    })

    // 201 Created — fresh subscriber.
    if (upstream.status === 201) {
      console.log(`[subscribe] new subscriber: ${email}`)
      return res.status(200).json({ ok: true })
    }

    // Buttondown returns 400 for invalid email AND for already-subscribed.
    // We want to surface "already subscribed" as a soft success to the
    // user (no point in an error), but treat truly-invalid emails as an
    // error. Parse the body to distinguish.
    const upstreamBody = await upstream.text()
    if (upstream.status === 400) {
      const lower = upstreamBody.toLowerCase()
      if (
        lower.includes('already') ||
        lower.includes('exists') ||
        lower.includes('subscribed')
      ) {
        return res.status(200).json({ ok: true, alreadySubscribed: true })
      }
      console.warn(`[subscribe] 400 from Buttondown for ${email}: ${upstreamBody.slice(0, 200)}`)
      return res.status(400).json({ error: 'Invalid email' })
    }

    // Anything else upstream — log + opaque error to the client.
    console.error(
      `[subscribe] Buttondown returned ${upstream.status} for ${email}: ${upstreamBody.slice(0, 200)}`,
    )
    return res.status(502).json({ error: 'Subscription failed, please try again later' })
  } catch (err) {
    console.error(`[subscribe] fetch to Buttondown failed for ${email}:`, err)
    return res.status(502).json({ error: 'Subscription failed, please try again later' })
  }
}
