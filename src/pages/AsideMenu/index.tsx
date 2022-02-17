import React from 'react'
import { configs } from '@/routes/index'
import { AsideName } from './style'
import { Link } from 'react-router-dom'

import ActiveLabel from '@/components/ActiveLabel/index'

interface Props {}

interface States {}

class AsideMenu extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <AsideName>
        {configs.map(config => (
          <Link to={config?.path ?? '*'} key={`${config.name}-link`}>
            <ActiveLabel label={config.label}></ActiveLabel>
          </Link>
        ))}
      </AsideName>
    )
  }
}

export default () => {
  return <AsideMenu></AsideMenu>
}
