import { loadPyodide, type PyodideInterface } from 'pyodide'
import { useEffect, useState, type ChangeEvent } from 'react'

const App = () => {
  const [pyodide, setPyodide] = useState<PyodideInterface>()
  const [inputText, setInputText] = useState('')
  const [shellResults, setShellResults] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value)
  }

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
      setInputText('')
    }
  }

  useEffect(() => {
    loadPyodide()
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
      <textarea value={inputText} onChange={handleInputChange} />
      <button type="button" onClick={execute}>
        Execute
      </button>
    </div>
  )
}

export default App
