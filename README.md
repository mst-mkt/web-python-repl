<h1 align="center">
    Web Python REPL
</h1>

<div align="center">
    <i>Interactive Python shell in browser</i><br />
    <a href="https://github.com/mst-mkt/web-python-repl/actions/workflows/check.yml">
        <img src="https://github.com/mst-mkt/web-python-repl/actions/workflows/check.yml/badge.svg?branch=main" alt="Lint and TypeCheck" />
    </a><br />
    <img src="https://github.com/mst-mkt/web-python-repl/assets/131662659/a26a6557-166d-4ede-b988-b8e7c54ee497" alt="Screenshot" />
</div>

## Screenshots
![Screenshot](https://github.com/mst-mkt/web-python-repl/assets/131662659/a26a6557-166d-4ede-b988-b8e7c54ee497)

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
|:----:| --------- | -------------------------------------------------------------------- |
| <img src="https://pyodide.org/en/stable/_static/pyodide-logo.png" alt="Pyodide logo" height="24" width="auto" /> | Pyodide | Python distribution for the browser and Node.js based on WebAssembly |
| <img src="https://ja.vitejs.dev/logo-with-shadow.png" alt="Vitejs logo" width="32" height="32" /> | Vite | Next Generation Frontend Tooling                                     |
| <img src="https://github.com/master-co.png" width="48" height="48" alt="MasterCSS logo" /> | MasterCSS | A Virtual CSS language with enhanced syntax                          |
