import { useEffect, useRef, useState } from 'react'
import { DatePickerInput } from './style'
import DatePickerComp from './DatePicker'
import Popper from '@/components/basic/Popper'
import dayjs from 'dayjs'
import { FULL_TIME_FORMAT } from '@/configs/constant'

interface Props {
  state: State<string[]>
}

const useFocus = () => {
  const [isFocus, setIsFocus] = useState(false)

  const focusHandler = () => {
    setIsFocus(!isFocus)
  }

  return {
    isFocus,
    focusHandler,
  }
}

function DatePicker(props: Props): JSX.Element {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const datePickerRef = useRef<HTMLElement | null | any>(null)
  useEffect(() => {
    const node = datePickerRef.current as HTMLElement

    setX(node.getBoundingClientRect().x)
    setY(node.getBoundingClientRect().y)
  }, [datePickerRef])

  const { isFocus, focusHandler } = useFocus()

  const [value] = props.state

  return (
    <>
      <DatePickerInput
        ref={datePickerRef}
        tabIndex={0}
        onFocus={focusHandler}
        className="date-picker-input"
      >
        {value.length === 0 ? (
          <div className="placeholder">請選擇日期</div>
        ) : (
          <>
            <div className="date-label">{dayjs(value[0]).format(FULL_TIME_FORMAT)}</div>
            <div>~</div>
            <div className="date-label">{dayjs(value[1]).format(FULL_TIME_FORMAT)}</div>
          </>
        )}
      </DatePickerInput>
      {isFocus ? (
        <Popper x={x} y={y + 48} trigger={focusHandler}>
          <DatePickerComp state={props.state}></DatePickerComp>
        </Popper>
      ) : undefined}
    </>
  )
}
export default DatePicker
