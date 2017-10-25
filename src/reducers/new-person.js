import { NEW_PERSON } from 'constants'
const { UPDATE_NEW_PERSON_INFO, RESET_PERSON_INFO } = NEW_PERSON

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  birthDate: '',
  email: '',
  phone: '',
  adress: '',
  notes: '',
}

export default function newPerson(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_PERSON_INFO:
      return { ...state, ...action.payload }
    case RESET_PERSON_INFO:
      return initialState
    default:
      return state
  }
}
