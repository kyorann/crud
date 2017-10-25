import { FILTER_LIST } from 'constants'
const { SORT_LIST, SEARCH_LIST } = FILTER_LIST

export function sortList(sortBy) {
  return {
    type: SORT_LIST,
    payload: sortBy,
  }
}

export function updateSearch(keyword) {
  return {
    type: SEARCH_LIST,
    payload: keyword,
  }
}
