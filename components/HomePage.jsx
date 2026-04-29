import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const onClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <button
      onClick={onClick}
      className={'copy-btn' + (copied ? ' copy-btn-copied' : '')}
      title={copied ? 'Copied' : 'Copy to clipboard'}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
    >
      <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" preserveAspectRatio="xMidYMid meet">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" preserveAspectRatio="xMidYMid meet">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </span>
      <span className="copy-btn-label">{copied ? 'copied' : 'copy'}</span>
    </button>
  )
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>AIDE Memory, Persistent Memory for AI Coding Agents and Teams</title>
        <meta
          name="description"
          content="Layered, path-scoped, automatically-captured memory for AI coding agents. Works across sessions, tools, and teammates. Your agent and your team's agents stop relearning the same things."
        />
      </Head>

      <div className="hero-wrapper">
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="hero-brand">aide-memory</div>
          <div className="hero-badge">Auto-captured. Auto-recalled. Path-scoped. Team-synced. Cross-tool.</div>
          <h1 className="hero-title">
            Your agent <span className="hero-highlight">remembers.</span>
          </h1>
          <p className="hero-team-note">And your team&apos;s agents too.</p>
          <p className="hero-subtitle">
            Categorized, path-scoped, auto-captured and recalled memory for AI coding agents and teams.
          </p>

          <div className="hero-install">
            <code>npx aide-memory init</code>
            <CopyButton text="npx aide-memory init" />
          </div>

          <div className="hero-stats">
            Free &middot; Local-first &middot; No account required &middot; Claude Code + Cursor today
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

      <div className="problem-section">
        <h2>The gap aide-memory closes</h2>
        <p className="problem-lead">
          Static rules files (CLAUDE.md, .cursorrules) and skills cover always-on guidance and procedures. They&apos;re a starting point, but they don&apos;t do scoped, layered, auto-captured project memory. aide-memory adds that layer.
        </p>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Rules files don&apos;t scale</h3>
            <p>One flat file, no path scoping, no categorized layers, manual to update. They get injected globally on every turn, even when most of it isn&apos;t relevant to the file the agent just opened, costing tokens and crowding context for things that don&apos;t apply.</p>
          </div>
          <div className="problem-card">
            <h3>Cross-session and cross-teammate gaps</h3>
            <p>The fix you taught your agent yesterday isn&apos;t in today&apos;s session by default. Your teammates&apos; agents start fresh too, learning some of the same things, some different things, none of it shared.</p>
          </div>
          <div className="problem-card">
            <h3>Tool-specific memory</h3>
            <p>You can copy a CLAUDE.md to .cursorrules manually, but the conventions you teach your agent in one tool don&apos;t carry to the other on their own. Switch tools (or hand off to a teammate on a different tool) and your project context doesn&apos;t come with you unless someone moves the file.</p>
          </div>
          <div className="problem-card">
            <h3>Manual capture, always-on recall</h3>
            <p>Capturing context to a rules file is a manual edit. Recall is the opposite problem: rules files inject every line, every turn, even when most of it isn&apos;t relevant to the file the agent just opened. aide-memory automates capture (hooks prompt the agent on corrections and decisions) and scopes recall to the relevant area instead of dumping everything.</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-heading">How aide-memory is different</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#x1f9e0;</div>
            <h3>Prompted at the right moments</h3>
            <p>When the agent opens a relevant file, it gets prompted to recall what was already learned for that area. When you correct the agent, the hook detects the correction and prompts it to store the lesson. Decisions and non-obvious findings are picked up via the periodic Stop reflection.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f4cd;</div>
            <h3>Scoped, layered recall</h3>
            <p>Memories attach to the code area they apply to (<code>src/auth/**</code>, <code>packages/api/**</code>) and to one of four categorized layers. The agent gets back what&apos;s relevant to that scope, not the whole rules file.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f465;</div>
            <h3>Git-synced for teams</h3>
            <p>Memories are JSON files in your repo. Commit, push, pull, your teammates&apos; agents pick up the same context. Private preferences stay gitignored.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f504;</div>
            <h3>Project memory, not tool memory</h3>
            <p>Memories belong to your project, not to whichever tool you&apos;re using. Switch tools or hand off to a teammate and the memory store comes with the codebase.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x26a1;</div>
            <h3>Nudge, don&apos;t dump</h3>
            <p>When a relevant file is opened and memories haven&apos;t been recalled this session, a small (~20 token) nudge tells the agent that memories exist for the path; the agent decides which ones to pull. The aide-memory rules file (small) is injected per turn so the agent knows when to use the MCP tools, but memory bodies themselves come in on demand.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f6e0;</div>
            <h3>Tunable to your flow</h3>
            <p>Defaults capture the common case. Prompt cadence, recall scope, injection caps, and search mode are all tunable.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f512;</div>
            <h3>Local-first storage</h3>
            <p>Memories live as JSON files in your repo plus a local SQLite cache. Code and memory content never leave your machine. Anonymized usage counts ship by default; disable with <code>AIDE_TELEMETRY=off</code>.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f4b0;</div>
            <h3>Uses your existing agent</h3>
            <p>aide-memory does no LLM calls of its own. The model in the editor you already pay for does all the reasoning. Your token bill is what the agent spends on tool descriptors plus the recall payloads it pulls (scoped to the file it&apos;s touching), not a separate inference layer.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f527;</div>
            <h3>Free</h3>
            <p>Free to use. More features or tiers may be added.</p>
          </div>
        </div>
      </div>

      <div className="how-section">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Init</h3>
              <code className="step-code">npx aide-memory init</code>
              <p>Creates <code>.aide/</code>, installs six hooks, configures the MCP server, writes Claude Code + Cursor rules files. Seconds.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Capture as you work</h3>
              <p>When you correct the agent, the correction is detected and the agent gets prompted to store the lesson. At the end of a turn, a periodic reflection nudges the agent to save any decisions or non-obvious findings. Before context compaction, session tracking is cleared so the next turn re-prompts cleanly.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Recall in your next session, or your teammate&apos;s</h3>
              <code className="step-code">8 memories exist for src/checkout/**. Call aide_recall if relevant.</code>
              <p>When the agent opens a file with un-recalled scoped memories, the hook prompts <code>aide_recall</code> and the agent pulls back only what applies to that area. Commit <code>.aide/memories/</code> and your teammates&apos; agents pick up the same memories on their next read of the same area.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe-section">
        <h2>Stay in the loop</h2>
        <p>Occasional updates on aide-memory: new editor adapters and releases.</p>
        <form
          className="subscribe-form"
          action="https://buttondown.com/api/emails/embed-subscribe/aide-memory"
          method="post"
          target="popupwindow"
          onSubmit={(e) => {
            const win = window.open('https://buttondown.com/aide-memory', 'popupwindow')
            if (!win) e.preventDefault()
          }}
        >
          <input type="email" name="email" placeholder="you@example.com" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="cta-section">
        <h2>Get started in seconds.</h2>
        <p>Free. Local-first. No account required.</p>
        <div className="hero-install" style={{ marginTop: '1.5rem' }}>
          <code>npx aide-memory init</code>
          <CopyButton text="npx aide-memory init" />
        </div>
        <div className="cta-links">
          <Link href="/docs/quick-start">Quick Start Guide</Link>
          <span className="cta-sep">&middot;</span>
          <Link href="/docs/concepts">Concepts</Link>
          <span className="cta-sep">&middot;</span>
          <Link href="/docs/comparison">Compared with claude-mem &amp; engram</Link>
          <span className="cta-sep">&middot;</span>
          <a href="https://github.com/aide-memory/aide-memory/issues" target="_blank" rel="noopener">Support</a>
        </div>
      </div>
    </>
  )
}
