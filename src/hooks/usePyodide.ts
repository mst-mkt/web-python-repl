import { type PyodideInterface, loadPyodide } from 'pyodide'
import { useCallback, useEffect, useState } from 'react'
import type { ReplInteraction } from '../types/ReplType'

type Option = {
  execCallback?: () => void
}

export const usePyodide = ({ execCallback }: Option) => {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [replInteractions, setReplInteractions] = useState<ReplInteraction[]>([
    {
      type: 'info',
      text: 'Welcome to Web Python REPL.',
      timestamp: new Date(),
    },
  ])

  const execute = useCallback(
    async (inputText: string) => {
      if (pyodide === null) return
      if (inputText.trim() === '') return

      const input: ReplInteraction<'input'> = {
        type: 'input',
        text: inputText.trim(),
        timestamp: new Date(),
      }

      try {
        const result = await pyodide.runPythonAsync(inputText)
        const output: ReplInteraction<'output'> = {
          type: 'output',
          text: result === '' ? undefined : result,
          timestamp: new Date(),
        }
        setReplInteractions((prev) => [...prev, input, output])
      } catch (err) {
        const error: ReplInteraction<'error'> = {
          type: 'error',
          text: `${err}`,
          timestamp: new Date(),
        }
        setReplInteractions((prev) => [...prev, input, error])
      } finally {
        execCallback?.()
      }
    },
    [pyodide, execCallback],
  )

  useEffect(() => {
    loadPyodide({ indexURL: import.meta.env.VITE_PYODIDE_INDEX_URL })
      .then((pyodide) => setPyodide(pyodide))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [])

  return { isLoading, replInteractions, execute }
}
