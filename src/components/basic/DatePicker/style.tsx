import styled from 'styled-components'
import { inputStyle } from '@/assets/styles/common'
import { color } from '@/assets/styles/global'

export const DatePickerInput = styled.div`
  ${inputStyle};
  display: flex;
  align-items: center;
  width: 320px;
  text-align: center;

  .placeholder {
    color: ${color.fontPlaceholder};
  }

  .date-label {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:focus-within {
    outline-width: 0px;
    border-color: ${color.fontMain};
  }
`

export const DatePickerCompStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 508px;

  .input-picker {
    display: flex;
    flex-direction: row;

    div {
      margin: 0 2px;
    }
  }

  .map-picker {
    display: flex;
    padding-top: 8px;
  }
`

export const DateMapStyle = styled.div`
  display: flex;
  flex-direction: column;

  .week-list {
    display: flex;

    div {
      text-align: center;
      height: 28px;
      width: 28px;
      padding: 4px;
    }
  }

  .month-picker {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0 12px;

    .prev,
    .next {
      display: flex;

      & div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
      }

      & div:hover {
        cursor: pointer;
        border-radius: 100%;
        background: ${color.fontMain};
      }
    }
  }
`
