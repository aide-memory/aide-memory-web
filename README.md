# aide-memory landing page

This is the source for [aide-memory.dev](https://aide-memory.dev), the public landing page and documentation site for aide-memory.

For the actual aide-memory project, see [aide-memory/aide-memory](https://github.com/aide-memory/aide-memory).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Pages

- `pages/index.jsx` — landing page (HomePage component)
- `pages/docs/index.mdx` — docs overview
- `pages/docs/quick-start.mdx` — install + first recall
- `pages/docs/concepts.mdx` — mental model
- `pages/docs/features.mdx` — capability cheat sheet
- `pages/docs/configuration.mdx` — every public config knob
- `pages/docs/reference.mdx` — MCP tools + CLI commands side-by-side
- `pages/docs/hooks.mdx` — per-hook walkthrough
- `pages/docs/supported-editors.mdx` — editor capability matrix
- `pages/docs/editors/{claude-code,cursor,codex,copilot,windsurf}.mdx`
- `pages/docs/architecture.mdx` — internals
- `pages/docs/troubleshooting.mdx`
- `pages/docs/comparison.mdx` — aide-memory vs claude-mem vs engram
- `pages/docs/faq.mdx`

Built with [Nextra](https://nextra.site/) (docs theme, dark mode by default).

## Deployment

Vercel auto-deploys on push to `main`. Branch protection requires PRs for any change to main.

## Contributing

Bug reports and small content corrections welcome via PR. Open an issue first for substantive changes.

## License

aide-memory itself is proprietary freeware (free to use, source not public). The website content in this repo is part of the same project's documentation surface.
