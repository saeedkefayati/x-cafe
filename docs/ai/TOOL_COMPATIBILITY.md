# Coding-agent compatibility

The repository uses one canonical instruction source and small tool adapters to avoid duplicated rules.

| Tool family                           | Repository entry point                                                   |
| ------------------------------------- | ------------------------------------------------------------------------ |
| Codex and AGENTS.md-compatible agents | `AGENTS.md`                                                              |
| Claude Code                           | `CLAUDE.md`, which imports `AGENTS.md`                                   |
| GitHub Copilot                        | `AGENTS.md` plus `.github/copilot-instructions.md` compatibility adapter |
| Cursor                                | `AGENTS.md` plus `.cursor/rules/project-context.mdc`                     |
| Gemini CLI                            | `.gemini/settings.json`, configured to use `AGENTS.md`                   |
| Aider                                 | `.aider.conf.yml`, configured to read `AGENTS.md`                        |
| Other agents                          | Read `AGENTS.md`, then `docs/ai/START_HERE.md`                           |

## Maintenance rule

Never copy the full project rules into every adapter. Update `AGENTS.md` and current docs; adapters should remain short pointers.

Personal preferences, credentials, local machine paths, and private notes must stay outside version control.
