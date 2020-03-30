import { Instance, types } from 'mobx-state-tree'
import { createContext } from 'react'
import AudiosStore from './audios.store'

const Store = types.model({
  audios: types.optional(AudiosStore, {})
})

export const StoreContext = createContext({} as Instance<typeof Store>)

export default Store
