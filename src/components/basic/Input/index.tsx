import { LcInput } from './style'
import TextInput from './text'
import DateTimeInput from './datetime'

export type Type = 'text' | 'datetime'
interface Props {
  state: State<string>
  placeholder?: string
  type?: Type
}

function Input(props: Props): JSX.Element {
  const TextElement = <TextInput state={props.state} placeholder={props.placeholder}></TextInput>
  const DateTimeElement = (
    <DateTimeInput state={props.state as any} placeholder={props.placeholder}></DateTimeInput>
  )

  return (
    <LcInput type={props.type}>
      {(() => {
        switch (props.type) {
          case 'text':
            return TextElement

          case 'datetime':
            return DateTimeElement

          default:
            return TextElement
        }
      })()}
    </LcInput>
  )
}
export default Input
