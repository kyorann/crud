import { createStore, applyMiddleware } from 'redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

const router = routerMiddleware(browserHistory)

let persistedState

if (window.localStorage) {
  persistedState = JSON.parse(localStorage.getItem('store'))
}

export default function configureStore() {
  if (persistedState) {
    return createStore(reducers, persistedState, applyMiddleware(thunk, router))
  }

  return createStore(reducers, applyMiddleware(thunk, router))
}
