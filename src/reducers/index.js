import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import personsList from './persons-list'
import filterList from './filter-list'
import newPerson from './new-person'

export default combineReducers({
  routing: routerReducer,
  personsList,
  filterList,
  newPerson,
})
