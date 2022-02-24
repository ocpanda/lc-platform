import styled from 'styled-components'
import { color } from '@/assets/styles/global'
import { inputStyle } from '@/assets/styles/common'
import { Type } from './index'

type Prop = { type?: Type }

export const LcInput = styled.div`
  height: 38px;
  width: max-content;

  input {
    ${inputStyle};
    width: ${(props: Prop) => (props.type === 'datetime' ? '240px' : '200px')};

    &:focus {
      outline-width: 0px;
      border-color: ${color.fontMain};
    }
  }
`
