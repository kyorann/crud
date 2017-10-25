import { PERSONS_LIST } from 'constants'
const { ADD_PERSON } = PERSONS_LIST

const initialState = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doh',
    birthDate: '1973-08-12',
    phone: '+3906567987',
    adress: 'New York, Wall Street, 113',
    notes: 'Bad guy',
  },
  {
    id: '2',
    firstName: 'Eugene',
    lastName: 'Allenov',
    birthDate: '1982-05-24',
    phone: '+79261811113',
    adress: 'Moscow, Uspenskaya st, 79, 66',
    notes: 'Best FE developer ever :)',
  },
  {
    id: '3',
    firstName: 'Pride',
    lastName: 'Maximus',
    birthDate: '1992-11-10',
    phone: '+39261800003',
    adress: 'Saint-Petersburg, Lenina st, 76, 56',
    notes: 'Good guy',
  },
]

export default function personsList(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.payload]
    default:
      return state
  }
}
