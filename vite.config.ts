import CSSExtractorPlugin from '@master/css-extractor.vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), CSSExtractorPlugin()],
})
