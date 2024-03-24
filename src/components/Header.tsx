import { IconBrandGithubFilled, IconTerminal } from '@tabler/icons-react'

export const Header = () => {
  return (
    <header className="flex ai:center gap:8 w:100% h:64 px:24 fixed inset:0|0|auto">
      <IconTerminal size={32} color="#58f" />
      <h1 className="flex:1|1 f:20 color:#333 overflow:hidden t:ellipsis white-space:nowrap">
        Python REPL
      </h1>
      <a
        href="http://github.com/mst-mkt/web-python-repl"
        className="p:8 r:8 bg:#2222:hover ~background-color|.1s|ease-in-out"
      >
        <IconBrandGithubFilled size={20} color="#333" />
      </a>
    </header>
  )
}
