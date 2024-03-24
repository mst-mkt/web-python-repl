import { Header } from './components/Header'
import { Interactions } from './components/Interaction'
import { Loading } from './components/Loading'
import { TextArea } from './components/TextArea'
import { useInput } from './hooks/useInput'
import { usePyodide } from './hooks/usePyodide'

const App = () => {
  const [inputText, handleInputChange, clearInput] = useInput('')
  const { isLoading, replInteractions, execute } = usePyodide({ execCallback: clearInput })

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p:88|24|64">
          {replInteractions.map((interaction) => (
            <Interactions key={interaction.timestamp.toISOString()} content={interaction} />
          ))}
          <TextArea
            value={inputText}
            onChange={handleInputChange<HTMLTextAreaElement>}
            onSend={() => execute(inputText)}
          />
        </div>
      )}
    </div>
  )
}

export default App
