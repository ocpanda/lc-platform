import { SearchFormContainer } from './style'
import { Fields } from './define'
import ButtonComp from '@/components/basic/Button/index'

type Form = {
  [K: string]: State<any>
}

interface Props {
  fields: Fields<any>[]
  form: Form
  trigger: () => void
}

function SearchForm(props: Props): JSX.Element {
  return (
    <SearchFormContainer>
      {Object.keys(props.form).map(key => {
        const field = props.fields.find(field => field.prop === key)

        return (
          <div className="search-prop" key={key}>
            <div className="label">{field?.label ?? 'undefined title'}</div>
            {field?.element}
          </div>
        )
      })}
      <ButtonComp trigger={props.trigger} label="搜尋"></ButtonComp>
    </SearchFormContainer>
  )
}
export default SearchForm
