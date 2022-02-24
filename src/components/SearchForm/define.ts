export type Fields<P> = {
  label: string
  prop: keyof P
  element: JSX.Element
}

export function defineFields<P extends Record<string, any>>(fields: Fields<P>[]) {
  return fields
}