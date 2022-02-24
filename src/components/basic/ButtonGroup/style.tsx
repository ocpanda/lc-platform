import styled, { css } from 'styled-components'
import { color } from '@/assets/styles/global'

export const ButtonGroupStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`

type Prop = {
  disabled?: boolean
}

const triggerButton = css`
  cursor: pointer;
  border-radius: 100%;
  background: ${color.fontMain};
`
export const ButtonGroupItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 28px;
  min-height: 28px;
  padding: 4px;

  ${(props: Prop) =>
    props?.disabled === true
      ? css`
          &:hover {
            ${triggerButton}
          }
        `
      : css`
          color: ${color.fontPlaceholder};
        `}

  &.active {
    ${triggerButton}
  }
`
