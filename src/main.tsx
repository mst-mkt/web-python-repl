import '@master/normal.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '.virtual/master.css'

// biome-ignore lint/style/noNonNullAssertion: #root is exist in index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
