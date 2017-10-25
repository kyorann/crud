import { NEW_PERSON, PERSONS_LIST } from 'constants'
const { UPDATE_NEW_PERSON_INFO, RESET_PERSON_INFO } = NEW_PERSON
const { ADD_PERSON } = PERSONS_LIST


export function addPerson(person) {
  return {
    type: ADD_PERSON,
    payload: person,
  }
}

export function updateNewPersonInfo(field, value) {
  return {
    type: UPDATE_NEW_PERSON_INFO,
    payload: { [field]: value },
  }
}

export function resetPersonInfo() {
  return {
    type: RESET_PERSON_INFO,
  }
}
