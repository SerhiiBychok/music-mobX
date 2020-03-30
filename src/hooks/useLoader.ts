import { useState, useEffect } from 'react'

type FunctionType = (params: any, query?: any) => Promise<any> | any
type CleanupType = () => any

export interface ILoaderState {
  isFetching: boolean
  isFetched: boolean
  error: any
  mount: boolean
  data?: any
}

const defaultState = {
  isFetched: false,
  isFetching: false,
  error: null,
  mount: false
}

export function useLoader<T extends FunctionType>(
  fn: T,
  options: {
    params?: Parameters<T>[0]
    query?: any
    conditions?: any[]
    cleanup?: CleanupType
    loadOnMount?: boolean
  } = {}
): [T, ILoaderState] {
  const [state, setState] = useState<ILoaderState>({ ...defaultState })
  const loadOnMount =
    typeof options.loadOnMount === 'boolean' ? options.loadOnMount : true

  const load = async (params: any, query?: any) => {
    try {
      state.mount = true
      setState({
        ...state,
        isFetched: false,
        isFetching: true,
        error: null
      })

      const data = await fn(params, query)

      if (!state.mount) {
        return
      }

      setState({
        ...state,
        isFetched: true,
        isFetching: false,
        error: null,
        data
      })

      return data
    } catch (e) {
      console.error(e)
      if (!state.mount) {
        return
      }

      setState({
        ...state,
        isFetched: false,
        isFetching: false,
        error: e
      })

      return e
    }
  }

  useEffect(() => {
    if (state.mount && !state.isFetching && !state.isFetched && !state.error) {
      load(options.params)
    }
  }, [state])

  if (options.conditions) {
    useEffect(() => {
      if (state.isFetched || state.error) {
        load(options.params)
      }
    }, options.conditions)
  }

  useEffect(() => {
    if (loadOnMount) {
      load(options.params)
    }

    return () => {
      state.mount = false
      if (!state.isFetching && options.cleanup) {
        options.cleanup()
      }
    }
  }, [null])

  return [load as T, state]
}
