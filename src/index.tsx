import { Instance } from 'mobx-state-tree'
import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'
import { defaults } from 'data-fetcher'
import Store from '@stores/root.store'

import App from './App'

const history = createBrowserHistory()
// setup fetcher
defaults.baseUrl = 'https://apiv2.getmusic.io/api'
defaults.qs.stringify.arrayFormat = 'repeat'

const store: Instance<typeof Store> = Store.create({})

function renderApp() {
  render(
    <App history={history} store={store} />,
    window.document.getElementById('react-root')
  )
}

renderApp()
