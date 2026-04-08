export default {
  logo: <span style={{ fontWeight: 800, fontSize: '1.2em' }}>AIDE Memory</span>,
  project: {
    link: 'https://github.com/aide-memory/aide-memory',
  },
  docsRepositoryBase: 'https://github.com/aide-memory/aide-memory/tree/main/docs',
  footer: {
    content: 'AIDE Memory © 2026 — Persistent memory for AI coding agents',
  },
  darkMode: true,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – AIDE Memory',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Persistent, path-scoped memory for AI coding agents" />
      <meta name="og:title" content="AIDE Memory – Persistent Memory for AI Agents" />
      <meta name="og:description" content="Your AI agent forgets everything you teach it. AIDE Memory fixes that." />
    </>
  ),
}
