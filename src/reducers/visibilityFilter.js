import { uniFilterActions, courseFilterActions } from '../actions'

const visibilityFilter = (
  state = { courses: [], universities: [] },
  action
) => {
  console.log('filters red', action, state)

  switch (action.type) {
    // ADD UNI FILTER
    case uniFilterActions.ADD_ELEM:
      state.universities.push(action.elem)
      return state
    // ADD COURSE FILTER
    case courseFilterActions.ADD_ELEM:
      state.courses.push(action.elem)
      return state
    // DEFAULT
    default:
      return state
  }
}

export default visibilityFilter
