export default {
  logo: <span style={{ fontWeight: 800, fontSize: '1.2em' }}>AIDE Memory</span>,
  project: {
    link: 'https://github.com/aide-memory/aide-memory',
  },
  docsRepositoryBase: 'https://github.com/aide-memory/aide-memory-web/tree/main',
  footer: {
    content: 'AIDE Memory © 2026, persistent memory for AI coding agents',
  },
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – AIDE Memory',
    }
  },
  navbar: {
    extraContent: (
      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', fontSize: '0.9rem' }}>
        <a href="/docs/quick-start" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Quick Start</a>
        <a href="/docs" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Docs</a>
      </div>
    ),
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
