export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body || {}

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  console.log(`[subscribe] ${email} at ${new Date().toISOString()}`)

  return res.status(200).json({ ok: true })
}
