import styled from 'styled-components'
import { color } from '@/assets/styles/global'

type Prop = { x: number; y: number }

export const PopperStyled = styled.div`
  position: absolute;
  top: ${(props: Prop) => `${props.y}px`};
  left: ${(props: Prop) => `${props.x}px`};
  padding: 8px;
  min-width: 20px;
  min-height: 20px;
  border: 1px solid ${color.main};
  border-radius: 6px;
  box-shadow: 1px 1px 4px 0 ${color.shadow};

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${color.fontPrimary};
    position: absolute;
    top: -6px;
    left: 15px;
    transform: rotate(45deg);
    border-top: 1px solid ${color.main};
    border-left: 1px solid ${color.main};
  }
`
