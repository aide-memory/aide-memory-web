import Link from 'next/link'
import Head from 'next/head'

function CopyButton({ text }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="copy-btn"
      title="Copy to clipboard"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    </button>
  )
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>AIDE Memory, Persistent Memory for AI Coding Agents</title>
        <meta name="description" content="Structured, path-scoped memory that works across sessions and tools. Your agent remembers what you taught it." />
      </Head>

      <div className="hero-wrapper">
        {/* Animated grid background */}
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="hero-badge">MCP-native &middot; Local-first &middot; Zero config</div>
          <h1 className="hero-title">
            Your agent <span className="hero-highlight">remembers.</span>
          </h1>
          <p className="hero-subtitle">
            Persistent, path-scoped memory for AI coding agents.<br />
            Works across sessions. Works across tools.
          </p>

          <div className="hero-install">
            <code>npx aide-memory init</code>
            <CopyButton text="npx aide-memory init" />
          </div>

          <div className="hero-stats">
            Zero cloud dependencies &middot; Local-first &middot; Claude Code + Cursor
          </div>

          <div className="hero-actions">
            <Link href="/docs/quick-start" className="btn-primary">
              Get Started
            </Link>
            <a href="https://github.com/aide-memory/aide-memory" className="btn-secondary" target="_blank" rel="noopener">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#x1f9e0;</div>
            <h3>Automatic Capture</h3>
            <p>Six hooks fire at the right moments, corrections, planning decisions, and context are captured without you doing anything.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f4cd;</div>
            <h3>Path-Scoped Recall</h3>
            <p>Memories are scoped to code areas with glob patterns. Open a file, get only the context that matters for that area.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f504;</div>
            <h3>Cross-Tool</h3>
            <p>Works with Claude Code (full hook integration) and Cursor (~80% parity in 0.5.0). Codex, Copilot, and Windsurf get a rules template; full hook adapters land post-0.5.0.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f512;</div>
            <h3>Local-First</h3>
            <p>SQLite database on your machine. Memory files in your repo. Code and memory content never leave your machine. Anonymized event tallies are sent to PostHog only when you opt in via <code>AIDE_TELEMETRY=on</code>; default is off.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f4e6;</div>
            <h3>Structured Layers</h3>
            <p>Four layers, preferences, technical, area context, guidelines, so the right knowledge surfaces at the right time.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x26a1;</div>
            <h3>20-Token Nudge</h3>
            <p>No context dumping. A tiny ~20 token nudge per file read tells the agent memories exist. It decides whether to pull them.</p>
          </div>
        </div>
      </div>

      <div className="how-section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Init</h3>
              <code className="step-code">npx aide-memory init</code>
              <p>Creates .aide/ directory, installs hooks, configures MCP server. Two minutes, zero config.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Work Normally</h3>
              <p>Hooks capture corrections, planning decisions, and technical context automatically. You never interact with memory management.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Next Session</h3>
              <code className="step-code">8 memories exist for src/checkout/**. Call aide_recall if relevant.</code>
              <p>Your agent gets a nudge. It pulls what it needs. Context persists across sessions.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Get started in two minutes.</h2>
        <p>Free. Local-only. No account required.</p>
        <div className="hero-install" style={{ marginTop: '1.5rem' }}>
          <code>npx aide-memory init</code>
          <CopyButton text="npx aide-memory init" />
        </div>
        <div className="cta-links">
          <Link href="/docs/quick-start">Quick Start Guide</Link>
          <span className="cta-sep">&middot;</span>
          <Link href="/docs/features">Features</Link>
          <span className="cta-sep">&middot;</span>
          <a href="https://github.com/aide-memory/aide-memory/issues" target="_blank" rel="noopener">Support</a>
        </div>
      </div>
    </>
  )
}
