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
      {copied ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
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
          <div className="hero-badge">Auto-captured &amp; recalled &middot; Path-scoped &middot; Team-synced &middot; Cross-tool</div>
          <h1 className="hero-title">
            Your agent <span className="hero-highlight">remembers.</span>
            <br />
            Your team&apos;s agents remember too.
          </h1>
          <p className="hero-subtitle">
            Layered, path-scoped, automatically-captured memory for AI coding agents.
            <br />
            Works across sessions, tools, and teammates.
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
        <h2>The problem aide-memory solves</h2>
        <p className="problem-lead">
          Static rules files (CLAUDE.md, .cursorrules) get stale, miss area-specific context, and live as one giant file with no scoping.
          You teach your agent the same thing every session. Your teammates teach their agents the same things you taught yours.
          Switch from Claude Code to Cursor and the lesson is gone.
        </p>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Rules files don&apos;t scale</h3>
            <p>One flat file, no path scoping, no layers, no auto-capture. Becomes noise as it grows; nobody updates it; drifts from reality.</p>
          </div>
          <div className="problem-card">
            <h3>Every agent re-learns</h3>
            <p>The fix you taught yesterday is gone tomorrow. The decision your teammate made last sprint isn&apos;t in your agent&apos;s context. &quot;Works on my agent&quot; is the new &quot;works on my machine.&quot;</p>
          </div>
          <div className="problem-card">
            <h3>Tool lock-in for context</h3>
            <p>What you teach Claude Code doesn&apos;t carry to Cursor. What you teach Cursor doesn&apos;t come back. Switching tools costs a week of re-context.</p>
          </div>
          <div className="problem-card">
            <h3>Manual capture = no capture</h3>
            <p>The window for capturing a correction is right after it happens. No agent calls a &quot;remember&quot; tool unprompted. Without hooks, capture rate trends to zero.</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-heading">How aide-memory is different</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#x1f9e0;</div>
            <h3>Hooks prompt at the right moments</h3>
            <p>SessionStart and PreToolUse prompt the agent to recall when memories exist for the path. UserPromptSubmit prompts to remember on corrections. Stop prompts a periodic reflection. PreCompact prompts to save before context loss.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f4cd;</div>
            <h3>Path-scoped, layered recall</h3>
            <p>Glob scopes (<code>src/auth/**</code>, <code>packages/api/**</code>) plus four categorized layers (preferences, technical, area context, guidelines). Only the memories relevant to the file the agent just opened, ordered by how specific each layer is.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f465;</div>
            <h3>Git-synced for teams</h3>
            <p>Memories are JSON files in <code>.aide/memories/</code>. Scopes are relative paths so they work on every machine. Commit, push, pull, your teammates&apos; agents pick up the same memories. Private preferences are gitignored by default; per-call you can override.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f504;</div>
            <h3>Cross-tool memory store</h3>
            <p>Claude Code and Cursor both read the same <code>.aide/memories/</code>. The memory source travels across tools and teammates; conversation context still belongs to the tool. More editor adapters may come depending on user feedback.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x26a1;</div>
            <h3>Nudge, don&apos;t dump</h3>
            <p>The agent gets a small (~20 token) nudge that memories exist for the path it&apos;s about to read. It decides whether to call <code>aide_recall</code>. No big rules block injected on every turn.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f6e0;</div>
            <h3>Tunable to your team&apos;s flow</h3>
            <p>The default config captures the common case. The prompting cadence, recall scope dial, injection caps, Stop schedule, and search mode are all tunable. If one part of the flow doesn&apos;t fit, flip one knob.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f512;</div>
            <h3>Local-first, opt-in telemetry</h3>
            <p>Memories live as JSON files in your repo plus a local SQLite cache. Code and memory content never leave your machine. Telemetry is opt-in: until you set <code>AIDE_TELEMETRY=on</code>, aide-memory makes zero telemetry network calls.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f4b0;</div>
            <h3>No extra inference cost</h3>
            <p>aide-memory is a typed store, hook dispatcher, and MCP server. It does no LLM calls of its own. The model in the editor you already use does all the reasoning.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1f527;</div>
            <h3>Free for individuals today</h3>
            <p>Proprietary freeware: free to use today. Future enhancements may stay free, or some may ship as separate tiers as the project grows.</p>
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
              <h3>Work normally</h3>
              <p>You and your agent talk like usual. When you correct it, the UserPromptSubmit hook prompts the agent to store the correction. The Stop hook periodically prompts the agent to reflect on what was decided in this turn. The rules file written at init also nudges the agent to call <code>aide_remember</code> on important decisions, so capture isn&apos;t purely hook-driven.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Next session, next teammate</h3>
              <code className="step-code">8 memories exist for src/checkout/**. Call aide_recall if relevant.</code>
              <p>If memories exist for the path the agent just opened and haven&apos;t been recalled this session, the hook prompts <code>aide_recall</code>. Commit <code>.aide/memories/</code> and your teammates&apos; agents pick up the same memories on their next read of the same area.</p>
            </div>
          </div>
        </div>
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
