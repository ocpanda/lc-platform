import Performance from '@/pages/Performance'
import Script from '@/pages/Script'

export type RouteConfig = {
  label: string
  name: string
  path?: string
  element: any
}

export const configs: RouteConfig[] = [
  {
    label: '報表',
    name: 'Performance',
    path: '/performance',
    element: <Performance />,
  },
  { label: 'TSX 有點香', name: 'Script', path: '/script', element: <Script /> },
]
