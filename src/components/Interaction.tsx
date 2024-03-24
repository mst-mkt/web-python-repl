import type { Icon, IconProps } from '@tabler/icons-react'
import {
  IconArrowBadgeLeftFilled,
  IconArrowBadgeRightFilled,
  IconExclamationCircle,
} from '@tabler/icons-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { ReplInteraction } from '../types/ReplType'

type IconComponent = ForwardRefExoticComponent<Omit<IconProps, 'ref'> & RefAttributes<Icon>>

const icons: Record<ReplInteraction['type'], IconComponent> = {
  input: IconArrowBadgeRightFilled,
  output: IconArrowBadgeLeftFilled,
  error: IconExclamationCircle,
}

const colors: Record<ReplInteraction['type'], string> = {
  input: '#58f8',
  output: '#5853',
  error: '#f58',
}

const styles: Record<ReplInteraction['type'], string> = {
  input: '',
  output: '',
  error: 'color:red-50>pre bg:red-5',
}

type InteractionProps = {
  content: ReplInteraction
}

export const Interactions = ({ content }: InteractionProps) => {
  const Icon = icons[content.type]

  return (
    <div
      className={`grid grid-template-columns:interaction gap:8 p:16 bb:#2222|solid|1 ${
        styles[content.type]
      }`}
    >
      <Icon size={24} color={colors[content.type]} />
      {content.text === undefined ? (
        <i className="p:4 color:#333 f:12">undefined</i>
      ) : (
        <pre className="p:4 white-space:pre-wrap overflow:hidden text-overflow:ellipsis">
          {content.text}
        </pre>
      )}
      <time className="p:6 color:#333 f:10">{content.timestamp.toLocaleTimeString()}</time>
    </div>
  )
}
