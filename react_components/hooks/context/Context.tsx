import React, { createContext, ReactNode, useContext, useReducer } from 'react'

const ExampleStateContext = createContext<unknown>(null)
const ExampleStateDispatchContext = createContext<unknown>(null)

const exampleStateReducer = (state: any, action: any) => {
  return state
}

const ExampleStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer<any>(exampleStateReducer, {})
  return (
    <ExampleStateContext.Provider value={state}>
      <ExampleStateDispatchContext.Provider value={dispatch}>
        {children}
      </ExampleStateDispatchContext.Provider>
    </ExampleStateContext.Provider>
  )
}

const useExampleState = () => {
  const state = useContext(ExampleStateContext)

  if (!state) {
    throw new Error('useExampleState must be used from within state provider ')
  }
  return state
}

const useExampleDispatch = () => {
  const dispatch = useContext(ExampleStateDispatchContext)

  if (!dispatch) {
    throw new Error('useExampleDispatch must be used from within dispatch provider ')
  }
  return dispatch
}

export { ExampleStateProvider, useExampleState, useExampleDispatch }
