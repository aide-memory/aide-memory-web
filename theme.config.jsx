export default {
  logo: <span style={{ fontWeight: 800, fontSize: '1.2em' }}>AIDE Memory</span>,
  project: {
    link: 'https://github.com/aide-memory/aide-memory',
  },
  docsRepositoryBase: 'https://github.com/aide-memory/aide-memory-web/blob/main',
  editLink: {
    component: function EditLink({ className, filePath, children }) {
      if (!filePath) return null
      const href = `https://github.com/aide-memory/aide-memory-web/blob/main/${filePath}`
      return (
        <a className={className} href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    },
  },
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
      <meta name="description" content="Categorized, path-scoped, auto-captured and recalled memory for AI coding agents and teams." />
      <meta name="og:title" content="AIDE Memory – Persistent Memory for AI Coding Agents and Teams" />
      <meta name="og:description" content="Categorized, path-scoped, auto-captured and recalled memory for AI coding agents. Works across sessions, tools, and teammates." />
    </>
  ),
}
