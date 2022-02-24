type State<T> = [T, React.Dispatch<React.SetStateAction<T>>]
type FormState<P extends Record<string, any>, U> = Record<
  keyof P,
  [U, React.Dispatch<React.SetStateAction<U>>]
>
type DispatchStateAction<T> = React.Dispatch<React.SetStateAction<T>>

type HTMLChangeEvent<T> = React.ChangeEvent<T>