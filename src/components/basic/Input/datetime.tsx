import dayjs from 'dayjs'
import { FULL_TIME_FORMAT } from '@/configs/constant'

interface Props {
  state: State<string | undefined>
  placeholder?: string
}

const useValue = ({
  value,
  setValue,
}: {
  value: string | undefined
  setValue: DispatchStateAction<string | undefined>
}) => {
  const changeValueOnEvent = (e: HTMLChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const blurFormatterHandler = () => {
    const modifyValue = dayjs(value)

    if (modifyValue.format() === 'Invalid Date') setValue(undefined)
    else setValue(modifyValue.format(FULL_TIME_FORMAT))
  }

  return {
    changeValueOnEvent,
    blurFormatterHandler,
  }
}

function DateTimeInput(props: Props): JSX.Element {
  const [value, setValue] = props.state
  const { changeValueOnEvent, blurFormatterHandler } = useValue({ value, setValue })

  return (
    <input
      value={value ?? ''}
      type="text"
      placeholder={`${props?.placeholder} ${FULL_TIME_FORMAT}` ?? FULL_TIME_FORMAT}
      onChange={changeValueOnEvent}
      onBlur={blurFormatterHandler}
    />
  )
}
export default DateTimeInput
