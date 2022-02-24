import React, { useState } from "react"

export function useStateForm<P extends Record<string, any>>(stateForm: P){
  return Object.keys(stateForm).reduce((acc, key) => ({
    ...acc,
    [key]: useState<typeof stateForm[keyof P]>(stateForm[key]),
  }), {} as Record<keyof P, [typeof stateForm[keyof P], React.Dispatch<React.SetStateAction<typeof stateForm[keyof P]>>]>)
}
