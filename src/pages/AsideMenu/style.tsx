import styled from 'styled-components'
import { color } from '@/assets/styles/global'

export const AsideName = styled.div`
  width: 240px;
  height: 100%;
  background: ${color.main};

  a {
    text-decoration: none;
  }

  & div:hover {
    background: #123;
  }
`
