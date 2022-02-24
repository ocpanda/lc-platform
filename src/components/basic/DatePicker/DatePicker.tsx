import { useEffect } from 'react'
import LcInput from '@/components/basic/Input'
import { useStateForm } from '@/use/useStateForm'
import { DatePickerCompStyle } from './style'
import DateMap from './DateMap'
import dayjs from 'dayjs'
import { FULL_START_TIME_FORMAT, FULL_END_TIME_FORMAT } from '@/configs/constant'

interface Props {
  state: State<string[]>
}

function DatePickerComp(props: Props): JSX.Element {
  const [value, setValue] = props.state

  type Form = {
    startTime: string
    endTime: string
  }
  const stateForm: Form = {
    startTime: value[0],
    endTime: value[1],
  }
  const state = useStateForm<Form>(stateForm)
  useEffect(() => {
    if (
      [state.startTime[0], state.endTime[0]].some(prop =>
        ['Invalid Date', undefined, ''].includes(prop)
      )
    )
      setValue([])
    else if (state.startTime[0] === undefined && state.endTime[0] === undefined) setValue([])
    else {
      const startTime =
        state.startTime[0].match(/^\d+(-\d+)+\s\d+(:\d+){2}$/g) === null
          ? dayjs(state.startTime[0]).format(FULL_START_TIME_FORMAT)
          : state.startTime[0]
      const endTime =
        state.endTime[0].match(/^\d+(-\d+)+\s\d+(:\d+){2}$/g) === null
          ? dayjs(state.endTime[0]).format(FULL_END_TIME_FORMAT)
          : state.endTime[0]
      setValue([startTime, endTime])
    }
  }, [state.startTime[0], state.endTime[0]])

  return (
    <DatePickerCompStyle>
      <div className="input-picker">
        <LcInput state={state.startTime} placeholder="起始日期" type={'datetime'}></LcInput>
        <LcInput state={state.endTime} placeholder="結束日期" type={'datetime'}></LcInput>
      </div>

      <div className="map-picker">
        <DateMap state={state.startTime}></DateMap>
        <DateMap state={state.endTime}></DateMap>
      </div>
    </DatePickerCompStyle>
  )
}
export default DatePickerComp
