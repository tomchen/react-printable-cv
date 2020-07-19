import { RENDER_DATA, IMPORT_JSON } from '../constants/ActionTypes'

const userData = (state = {}, action) => {
  switch (action.type) {
    case RENDER_DATA:
      return action.data.userData
    case IMPORT_JSON:
      return action.data.cv
    default:
      return state
  }
}

export default userData
