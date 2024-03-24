<h1 align="center">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 16"
        fill="none"
        stroke="#58f"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 7l5 5l-5 5" />
        <path d="M12 19l7 0" />
    </svg>
    Web Python REPL
</h1>

<div align="center">
    <i>Interactive Python shell in browser</i><br />
    <a href="https://github.com/mst-mkt/web-python-repl/actions/workflows/check.yml">
        <img src="https://github.com/mst-mkt/web-python-repl/actions/workflows/check.yml/badge.svg?branch=main" alt="Lint and TypeCheck" />
    </a><br />
    <img src="https://github.com/mst-mkt/web-python-repl/assets/131662659/4141fc37-e438-42cc-b280-ce4376854a9f" alt="Screenshot" />
</div>

## Development

### Setup

```sh
$ git clone
$ cd web-python-repl
$ pnpm i --frozen-lockfile
```

### Start dev server

```sh
$ pnpm dev
```

### Build

```sh
$ pnpm build
```

### Lint, Format, TypeCheck

```sh
$ pnpm lint      # Lint
$ pnpm lint:fix  # Lint and Fix
$ pnpm format    # Format
$ pnpm typecheck # TypeCheck
```

### Main Dependencies

|      |           |                                                                      |
| ---- | --------- | -------------------------------------------------------------------- |
| <img src="https://pyodide.org/en/stable/_static/pyodide-logo.png" alt="Pyodide logo" height="24" width="auto" /> | Pyodide   | Python distribution for the browser and Node.js based on WebAssembly |
| <img src="https://ja.vitejs.dev/logo-with-shadow.png" alt="Vitejs logo" width="32" height="32" /> | Vite      | Next Generation Frontend Tooling                                     |
| <svg width="32" height="32" alt="Master" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 103.81 56.36"><defs><linearGradient id="gradientundefined" x1="0.5" y1="-1.054" x2="0.5" y2="1.002" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c8861c"></stop><stop offset="0.323" stop-color="#e6a345"></stop><stop offset="1" stop-color="#f6db9b"></stop></linearGradient><linearGradient id="gradientundefined-2" x1="21.397" y1="-1.054" x2="21.397" y2="1.002" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c78a28"></stop><stop offset="0.323" stop-color="#e6a345"></stop><stop offset="1" stop-color="#f6db9b"></stop></linearGradient><linearGradient id="gradientundefined-3" x1="0.156" y1="-0.44" x2="0.754" y2="1.009" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fcdd98"></stop><stop offset="0.232" stop-color="#fada94"></stop><stop offset="0.407" stop-color="#f6d48b"></stop><stop offset="0.564" stop-color="#efc87b"></stop><stop offset="0.709" stop-color="#e6b864"></stop><stop offset="0.847" stop-color="#d9a346"></stop><stop offset="0.975" stop-color="#c98922"></stop><stop offset="1" stop-color="#e6a345"></stop></linearGradient><clipPath id="clip-logo"><rect width="103.81" height="56.36"></rect></clipPath></defs><g id="logo" clip-path="url(#clip-logo)"><g id="Group_23" data-name="Group 23" transform="translate(-0.001)"><path id="Path_1" data-name="Path 1" d="M596.576,177.487c-2.716-4.806-5-5.52-7.227-5.52-3.27,0-5.542,3.023-6.994,5.705l-5.8,11.91,1.58,2.591a21.636,21.636,0,0,0,29.112,9.135l1.507-.786Z" transform="translate(-504.941 -147.386)" fill="url(#gradientundefined)"></path><path id="Path_2" data-name="Path 2" d="M528.344,177.487c2.716-4.806,5-5.52,7.228-5.52,3.268,0,5.54,3.023,6.993,5.705l5.8,11.91-1.579,2.591a21.636,21.636,0,0,1-29.112,9.135l-1.507-.786Z" transform="translate(-516.166 -147.386)" fill="url(#gradientundefined-2)"></path><path id="Path_3" data-name="Path 3" d="M593,157.726c-4.229-8.53-16.922-8.723-21.225-.129l-6.252,11.974L559.266,157.6c-4.3-8.594-16.995-8.4-21.225.129l-8.134,15.738c3.861-4.383,9.276-1.8,11.631,2.66l8.773,16.148,4.487,8.581a11.893,11.893,0,0,0,5.11,5.2,12.414,12.414,0,0,0,11.221,0,11.9,11.9,0,0,0,5.109-5.2l4.487-8.581,8.773-16.148c2.356-4.46,7.77-7.043,11.631-2.66Z" transform="translate(-513.612 -151.239)" fill="url(#gradientundefined-3)"></path></g></g></svg> | MasterCSS | A Virtual CSS language with enhanced syntax                          |
