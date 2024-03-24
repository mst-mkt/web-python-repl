/// <reference types="vite/client" />

type PyodideVersion = `v${number}.${number}.${number}` | 'dev'

interface ImportMetaEnv {
  readonly VITE_PYODIDE_INDEX_URL: `https://cdn.jsdelivr.net/pyodide/${PyodideVersion}/full/`
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
