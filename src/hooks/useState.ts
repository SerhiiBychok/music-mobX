import React from 'react'
import { StoreContext } from '@stores/root.store'

export default function useStore() {
  return React.useContext(StoreContext)
}
