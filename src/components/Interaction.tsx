import type { Icon, IconProps } from '@tabler/icons-react'
import {
  IconArrowBadgeLeftFilled,
  IconArrowBadgeRightFilled,
  IconExclamationCircle,
  IconFileAlert,
  IconFileArrowLeft,
  IconInfoCircle,
} from '@tabler/icons-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { ReplInteraction } from '../types/ReplType'
import { CopyButton } from './CopyButton'

type IconComponent = ForwardRefExoticComponent<Omit<IconProps, 'ref'> & RefAttributes<Icon>>

const icons: Record<ReplInteraction['type'], IconComponent> = {
  info: IconInfoCircle,
  input: IconArrowBadgeRightFilled,
  output: IconArrowBadgeLeftFilled,
  error: IconExclamationCircle,
  'standard-output': IconFileArrowLeft,
  'standard-error': IconFileAlert,
}

const colors: Record<ReplInteraction['type'], string> = {
  info: '#58f',
  input: '#58f8',
  output: '#5853',
  error: '#f58',
  'standard-output': '#5853',
  'standard-error': '#f58',
}

const styles: Record<ReplInteraction['type'], string> = {
  info: 'color:blue-50>pre bg:blue-5',
  input: '',
  output: '',
  error: 'color:red-50>pre bg:red-5',
  'standard-output': '',
  'standard-error': 'color:red-50>pre bg:red-5',
}

type InteractionProps = {
  showCopyButton?: boolean
  content: ReplInteraction
}

export const Interactions = ({ content, showCopyButton = true }: InteractionProps) => {
  const Icon = icons[content.type]

  return (
    <div
      className={`
        rel grid grid-template-columns:interaction gap:8 p:16
        bb:#2222|solid|1:not(:last) opacity:1:hover>div
        ${styles[content.type]}
      `}
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
      {showCopyButton && <CopyButton text={content.text ?? 'undefined'} />}
    </div>
  )
}
