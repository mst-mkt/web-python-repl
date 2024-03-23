import { loadPyodide, type PyodideInterface } from 'pyodide'
import { useEffect, useState } from 'react'
import { useInput } from './hooks/useInput'

const App = () => {
  const [pyodide, setPyodide] = useState<PyodideInterface>()
  const [shellResults, setShellResults] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [inputText, handleInputChange, clearInput] = useInput('')

  const execute = async () => {
    if (pyodide === undefined) return
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
      clearInput()
    }
  }

  useEffect(() => {
    loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/' })
      .then((pyodide) => setPyodide(pyodide))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return <div>initializing...</div>

  return (
    <div>
      <div>
        {shellResults.map((result, index) => (
          <pre key={index}>{result}</pre>
        ))}
      </div>
      <textarea value={inputText} onChange={handleInputChange<HTMLTextAreaElement>} />
      <button type="button" onClick={execute}>
        Execute
      </button>
    </div>
  )
}

export default App
