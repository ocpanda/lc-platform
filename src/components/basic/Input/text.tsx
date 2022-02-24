interface Props {
  state: State<string>
  placeholder?: string
}

const useValue = ({ setValue }: { setValue: DispatchStateAction<string> }) => {
  const changeValueOnEvent = (e: HTMLChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {
    changeValueOnEvent,
  }
}

function TextInput(props: Props): JSX.Element {
  const [value, setValue] = props.state
  const { changeValueOnEvent } = useValue({ setValue })

  return (
    <input
      value={value ?? ''}
      type="text"
      placeholder={props?.placeholder ?? '請輸入'}
      onChange={changeValueOnEvent}
    />
  )
}
export default TextInput
