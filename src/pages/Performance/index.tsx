import LcInput from '@/components/basic/Input/index'
import LcDatePicker from '@/components/basic/DatePicker/index'
import SearchFormComp from '@/components/SearchForm'
import { useStateForm } from '@/use/useStateForm'
import { defineFields } from '@/components/SearchForm/define'
import TableComp from './table'
import { useButton } from '@/components/basic/Button/index'
import { SearchForm, useSearch } from './useSearch'

interface Props {}

function Performance(props: Props): JSX.Element {
  const searchForm: SearchForm = { userName: undefined, orderDate: [] }
  const searchFields = useStateForm<SearchForm>(searchForm)
  const fields = defineFields<SearchForm>([
    {
      label: '客戶姓名',
      prop: 'userName',
      element: <LcInput state={searchFields.userName as State<string>} />,
    },
    {
      label: '訂單時間',
      prop: 'orderDate',
      element: <LcDatePicker state={searchFields.orderDate as State<string[]>} />,
    },
  ])

  const { onSearch } = useSearch(searchFields)
  const { buttonTrigger } = useButton(() => {
    onSearch()
  })

  return (
    <>
      <SearchFormComp trigger={buttonTrigger} fields={fields} form={searchFields}></SearchFormComp>
      <TableComp form={searchFields as typeof searchFields}></TableComp>
    </>
  )
}
export default Performance
