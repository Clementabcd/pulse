# Pulse

A react project created with **Forge** — a browser-based IDE
designed to be used by you just as much as by a connected agent (via
WebMCP).

## Inside Forge

- **File explorer** (left): create, rename, and delete files and
  folders. Click a file to open it.
- **Editor** (center): changes are saved automatically on every
  keystroke.
- **Preview** (right): the site runs live in the browser via
  WebContainers. Your edits only show up there after clicking "Reload
  preview" — except when an agent just wrote code, in which case the
  preview reloads on its own.
- **Console** (bottom, collapsible): output from `npm install`, the dev
  server, and build errors.
- **Packages**: install npm dependencies (e.g. `lucide-react`) without
  leaving the interface.
- **Publish**: connect a Vercel, Netlify, or GitHub token to publish
  this project straight from the browser.

## Connecting an agent (Codex, etc.) via WebMCP

Open this page in a browser that supports WebMCP (the ChatGPT desktop
app's built-in browser, or Chrome with the WebMCP flag enabled). The
agent will then see 10 exposed tools — `create_project`, `list_files`,
`read_file`, `write_files`, `delete_file`, `run_project`,
`get_console`, `build_project`, `publish`, `install_package` — and can
work on this project exactly as you would yourself with a mouse and
keyboard: same functions, same result, fully visible through the
"Agent Activity" panel.

## This project itself

```bash
npm install
npm run dev
```

Standard react + Vite. Nothing Forge-specific is required to run
this project outside the IDE — you can also download it (the
"Download" button) and keep working locally.
