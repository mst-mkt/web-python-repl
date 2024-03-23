import { useInput } from './hooks/useInput'
import { usePyodide } from './hooks/usePyodide'

const App = () => {
  const [inputText, handleInputChange, clearInput] = useInput('')
  const { isLoading, shellResults, execute } = usePyodide({ execCallback: clearInput })

  if (isLoading) return <div>initializing...</div>

  return (
    <div>
      <div>
        {shellResults.map((result, index) => (
          <pre key={index}>{result}</pre>
        ))}
      </div>
      <textarea value={inputText} onChange={handleInputChange<HTMLTextAreaElement>} />
      <button type="button" onClick={() => execute(inputText)}>
        Execute
      </button>
    </div>
  )
}

export default App
