import styled from 'styled-components'
import { inputStyle } from '@/assets/styles/common'
import { color } from '@/assets/styles/global'

export const Button = styled.div`
  height: 36px;
  width: 60px;
  ${inputStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.fontMain};
  color: ${color.fontSubMain};

  &:active {
    background: ${color.fontPlaceholder};
  }

  &:hover {
    cursor: pointer;
  }
`
