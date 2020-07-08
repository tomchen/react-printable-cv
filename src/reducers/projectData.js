import { RENDER_DATA, IMPORT_JSON } from '../constants/ActionTypes'

const projectData = (state = {}, action) => {
  switch (action.type) {
    case RENDER_DATA:
      return action.data.projectData
    case IMPORT_JSON:
      return action.data
    default:
      return state
  }
}

export default projectData
