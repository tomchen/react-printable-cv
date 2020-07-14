import configureStore from 'redux-mock-store'
import * as actions from 'Src/actions'
import * as types from 'Src/constants/ActionTypes'

const mockStore = configureStore()
const store = mockStore()

describe('test actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('changeLang dispatches the correct action and payload', () => {
    const lang = 'zh-cn'
    store.dispatch(actions.changeLang(lang))
    const expectedActions = [
      {
        lang,
        type: types.CHANGE_LANG,
      },
    ]
    const s = expect(store.getActions())
    s.toEqual(expectedActions)
    s.toMatchSnapshot()
  })

  it('renderData dispatches the correct action and payload', () => {
    const data = { a: 6 }
    store.dispatch(actions.renderData(data))
    const expectedActions = [
      {
        data,
        type: types.RENDER_DATA,
      },
    ]
    const s = expect(store.getActions())
    s.toEqual(expectedActions)
    s.toMatchSnapshot()
  })

  it('importJson dispatches the correct action and payload', () => {
    const data = { b: 'g' }
    store.dispatch(actions.importJson(data))
    const expectedActions = [
      {
        data,
        type: types.IMPORT_JSON,
      },
    ]
    const s = expect(store.getActions())
    s.toEqual(expectedActions)
    s.toMatchSnapshot()
  })
})
