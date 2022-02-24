import React, { useEffect } from 'react'
import { Portal } from 'react-portal'
import { PopperStyled } from './style'

const POPOVER_LIST = ['lc-popper', 'date-picker-input'] as const

interface Props {
  x: number
  y: number
  children: React.ReactElement
  trigger: any
}

function Popper(props: Props): JSX.Element {
  const triggerHandler = (e: any) => {
    let canTrigger = true
    if (
      e.path.some(
        (node: HTMLElement) => new RegExp(POPOVER_LIST.join('|'), 'g').exec(node.className) !== null
      )
    ) {
      canTrigger = false
    }

    if (canTrigger) props.trigger()
  }

  useEffect(() => {
    window.addEventListener('click', triggerHandler)

    return () => {
      window.removeEventListener('click', triggerHandler)
    }
  })

  return (
    <Portal>
      <PopperStyled x={props.x} y={props.y} className="lc-popper">
        {props.children}
      </PopperStyled>
    </Portal>
  )
}
export default Popper
