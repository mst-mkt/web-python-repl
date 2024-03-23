import { loadPyodide, type PyodideInterface } from 'pyodide'
import { useCallback, useEffect, useState } from 'react'

type Option = {
  execCallback?: () => void
}

export const usePyodide = ({ execCallback }: Option) => {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [shellResults, setShellResults] = useState<string[]>([])

  const execute = useCallback(
    async (inputText: string) => {
      if (pyodide === null) return
      if (inputText === '') return

      try {
        const result = await pyodide.runPythonAsync(inputText)
        setShellResults((prev) => [
          ...prev,
          `>>> ${inputText.trim()}`,
          ...(result === '' ? [] : [result]),
        ])
      } catch (error) {
        setShellResults((prev) => [...prev, `>>> ${inputText.trim()}`, `${error}`])
      } finally {
        execCallback?.()
      }
    },
    [pyodide, execCallback],
  )

  useEffect(() => {
    loadPyodide({ indexURL: import.meta.env.PYODIDE_INDEX_URL })
      .then((pyodide) => setPyodide(pyodide))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [])

  return { isLoading, shellResults, execute }
}
