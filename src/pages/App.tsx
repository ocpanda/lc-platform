import React from 'react'
import { Main, Container } from './style'
import AsideMenu from '@/pages/AsideMenu/index'
import { useRoutes } from 'react-router-dom'
import { configs } from '@/routes/index'

interface Props {
  routes: any
}

interface States {}

class App extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <Main>
        <AsideMenu></AsideMenu>
        <Container>{this.props.routes}</Container>
      </Main>
    )
  }
}

export default () => {
  const routes = useRoutes(configs)

  return <App routes={routes}></App>
}
