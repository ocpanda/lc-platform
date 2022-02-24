import styled from 'styled-components'
import { color } from '@/assets/styles/global'

export const Label = styled.div`
  font-size: 16px;
  padding: 12px 24px;
  color: ${color.fontPrimary};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    color: ${color.fontMain};
  }
`
