import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { debounce } from 'lodash'
import configureStore from './store/configureStore'
import Routes from 'routes'
import 'less/master.less'


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

if (window.localStorage) {
  const updateStorage = () => localStorage.setItem('store', JSON.stringify(store.getState()))
  const debouncedUpdateStorage = debounce(updateStorage, 250)
  store.subscribe(debouncedUpdateStorage)
}

render(
  <Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
