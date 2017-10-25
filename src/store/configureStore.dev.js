import { createStore, applyMiddleware, compose } from 'redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import DevTools from 'components/devtools'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

const router = routerMiddleware(browserHistory)

const enhancer = compose(
  applyMiddleware(thunk, router),
  DevTools.instrument()
)

let persistedState = {}

if (window.localStorage) {
  persistedState = JSON.parse(localStorage.getItem('store'))
}

export default function configureStore() {
  const store = persistedState ? createStore(reducers, persistedState, enhancer) : createStore(reducers, enhancer)

  if (module.hot) {
    module.hot.accept('reducers', () => store.replaceReducer(reducers))
  }

  return store
}
