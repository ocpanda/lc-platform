import React from 'react'
import { Label } from './style'

interface Props {
  label: string
}

interface States {}

class ActiveLabel extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return <Label>{this.props.label}</Label>
  }
}

export default ActiveLabel
