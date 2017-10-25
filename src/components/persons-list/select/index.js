import { createSelector } from 'reselect'

const getPersonsList = state => state.personsList
const getSortBy = state => state.filterList.sortBy
const getSearchBy = state => state.filterList.searchBy
const getSortDescending = state => state.filterList.sortDescending


export const personsListSelector = createSelector(
  [getPersonsList, getSortBy, getSearchBy, getSortDescending],
  (personsList, sortBy, searchBy, sortDescending) => {
    if (!searchBy.length && !sortBy.length) return personsList

    let list = [...personsList]

    if (searchBy.length) {
      list = personsList.filter(person => {
        const string = JSON.stringify(person, null, ' ').toLowerCase()
        return string.indexOf(searchBy.toLowerCase()) !== -1
      })
    }

    if (sortBy.length) {
      list = list.sort((personA, personB) => {
        if (!personA[sortBy] || !personB[sortBy]) return 0
        const a = personA[sortBy].toLowerCase()
        const b = personB[sortBy].toLowerCase()
        if (a < b) return sortDescending ? -1 : 1
        if (a > b) return sortDescending ? 1 : -1
        return 0
      })
    }

    return list
  }
)
