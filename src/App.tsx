import { Instance } from 'mobx-state-tree'
import React from 'react'
import { Provider } from 'mobx-react'
import { renderRoutes } from 'react-router-config'
import routes from '@routes'
import { Router } from 'react-router'
import Store, { StoreContext } from '@stores/root.store'
import { History } from 'history'
import { hot } from 'react-hot-loader/root'

interface IProps {
  history: History
  store: Instance<typeof Store>
}

function App(props: IProps) {
  const { store } = props
  return (
    <div>
      <StoreContext.Provider value={store}>
        <Provider {...store}>
          <Router history={props.history}>{renderRoutes(routes)}</Router>
        </Provider>
      </StoreContext.Provider>
    </div>
  )
}

export default hot(App)
