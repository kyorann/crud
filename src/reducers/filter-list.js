import { FILTER_LIST } from 'constants'
const { SORT_LIST, SEARCH_LIST } = FILTER_LIST

const initialState = {
  sortBy: '',
  sortDescending: true,
  searchBy: '',
}

export default function filterList(state = initialState, action) {
  switch (action.type) {
    case SORT_LIST:
      return {
        ...state,
        sortDescending: action.payload === state.sortBy ? !state.sortDescending : true,
        sortBy: action.payload,
      }
    case SEARCH_LIST:
      return {
        ...state,
        searchBy: action.payload,
      }
    default:
      return state
  }
}
