import { IconCopy, IconShare } from '@tabler/icons-react'

type CopyButtonProps = {
  text: string
}

export const CopyButton = ({ text }: CopyButtonProps) => {
  const copy = () => {
    navigator.clipboard.writeText(text)
  }

  const share = () => {
    const data = { text }
    if (navigator.share !== undefined && navigator.canShare(data)) {
      navigator.share(data)
      return
    }
    alert('Sharing is not supported in your browser.')
  }

  return (
    <div className="abs inset:-16|16|auto|auto flex r:6 overflow:hidden bg:white shadow:#0004|0|0|4 opacity:0 ~opacity|.1s|ease-in-out ">
      <button
        type="button"
        className="grid place-content:center h:32 square  bg:#0001:hover bg:#0002:active ~background-color|.1s|ease-in-out cursor:pointer"
        onClick={copy}
      >
        <IconCopy size={20} color="#333" />
      </button>
      <button
        type="button"
        className="grid place-content:center h:32 square  bg:#0001:hover bg:#0002:active ~background-color|.1s|ease-in-out cursor:pointer"
        onClick={share}
      >
        <IconShare size={20} color="#333" />
      </button>
    </div>
  )
}
