import { Button as ButtonStyle } from './style'

interface Props {
  label: string
  trigger: () => void
}

export const useButton = (fn: () => void) => {
  const buttonTrigger = () => {
    fn()
  }

  return {
    buttonTrigger,
  }
}

function Button(props: Props): JSX.Element {
  return (
    <ButtonStyle onClick={props.trigger} className="lc-button">
      {props.label ?? 'Button'}
    </ButtonStyle>
  )
}
export default Button
