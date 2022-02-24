import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import ButtonGroup, { defineFields } from '@/components/basic/ButtonGroup/index'
import { DateMapStyle } from './style'

interface Props {
  state: State<string>
}

const WEEK_LIST = ['日', '一', '二', '三', '四', '五', '六'] as const

const datesComputed = (nowYear: number, nowMonth: number) => {
  let lastMonthFixedDays = []
  {
    const firstWeekDayOfMonth = dayjs().year(nowYear).month(nowMonth).date(1).day()
    const lastDaysInLastMonth = dayjs()
      .year(nowYear)
      .month(nowMonth)
      .subtract(1, 'month')
      .daysInMonth()
    for (let day = lastDaysInLastMonth - firstWeekDayOfMonth; day < lastDaysInLastMonth; day++) {
      lastMonthFixedDays.push(day)
    }
    lastMonthFixedDays = lastMonthFixedDays.map(item => ({
      label: item as any,
      value: `${nowYear}-${
        dayjs().year(nowYear).month(nowMonth).subtract(1, 'month').month() + 1
      }-${item}` as any,
      disabled: false,
    }))
  }

  let nextMonthFixedDays = []
  {
    const lastWeekDayOfMonth = dayjs()
      .year(nowYear)
      .month(nowMonth)
      .date(dayjs().year(nowYear).month(nowMonth).daysInMonth())
      .day()
    for (let day = 1; day < 7 - lastWeekDayOfMonth; day++) {
      nextMonthFixedDays.push(day)
    }
    nextMonthFixedDays = nextMonthFixedDays.map(item => ({
      label: item as any,
      value: `${nowYear}-${
        dayjs().year(nowYear).month(nowMonth).add(1, 'month').month() + 1
      }-${item}` as any,
      disabled: false,
    }))
  }

  return lastMonthFixedDays.concat(
    Array.from(Array(dayjs().year(nowYear).month(nowMonth).daysInMonth()).keys()).map(item => ({
      label: (item + 1) as any,
      value: `${nowYear}-${nowMonth + 1}-${item + 1}` as any,
      disabled: true,
    })),
    nextMonthFixedDays
  )
}
const useDates = () => {
  const [nowDate, setNowDate] = useState(dayjs())
  const nowMonth = nowDate.month()
  const nowYear = nowDate.year()

  const [dates, setDates] = useState(defineFields(datesComputed(nowYear, nowMonth)))

  useMemo(() => {
    setDates(defineFields(datesComputed(nowYear, nowMonth)))
  }, [nowMonth, nowYear])

  const prevDateHandler = (type: 'month' | 'year') => {
    setNowDate(nowDate.subtract(1, type))
  }

  const nextDateHandler = (type: 'month' | 'year') => {
    setNowDate(nowDate.add(1, type))
  }

  return {
    dates,
    nowDate,
    nowYear: nowDate.year(),
    nowMonth: nowMonth + 1,
    prevDateHandler,
    nextDateHandler,
  }
}

function DateMap(props: Props): JSX.Element {
  const { nowMonth, nowYear, dates, prevDateHandler, nextDateHandler } = useDates()

  return (
    <DateMapStyle>
      <div className="month-picker">
        <div className="prev">
          <div onClick={() => prevDateHandler('year')}>&lt;&lt;</div>
          <div onClick={() => prevDateHandler('month')}>&lt;</div>
        </div>
        {`${nowYear}年${nowMonth}月`}
        <div className="next">
          <div onClick={() => nextDateHandler('month')}>&gt;</div>
          <div onClick={() => nextDateHandler('year')}>&gt;&gt;</div>
        </div>
      </div>
      <div className="week-list">
        {WEEK_LIST.map(week => (
          <div key={week}>{week}</div>
        ))}
      </div>
      <ButtonGroup state={props.state} fields={dates}></ButtonGroup>
    </DateMapStyle>
  )
}
export default DateMap
