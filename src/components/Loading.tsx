import { IconLoader2 } from '@tabler/icons-react'

export const Loading = () => {
  return (
    <div className="grid place-items:center place-content:center gap:32 h:100svh">
      <IconLoader2 size={64} color="#58f" className="block @rotate|2s|infinite|linear" />
      <p>Loading Python Distribution...</p>
    </div>
  )
}
