import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  .lc-button,
  .search-prop {
    &:not(:first-child) {
      margin-left: 12px;
    }

    & .label {
      margin-bottom: 4px;
    }
  }
`
