import reducer from 'Src/reducers'
import * as types from 'Src/constants/ActionTypes'

const initialState = {
  lang: null,
  userData: {},
  projectData: {},
}

describe('Initial state', () => {
  it('is correct', () => {
    const s = expect(reducer(undefined, {}))
    s.toEqual(initialState)
    s.toMatchSnapshot()
  })
})

describe('reducer', () => {
  it('should handle CHANGE_LANG', () => {
    const lang = 'zh-cn'

    const s = expect(
      reducer(initialState, {
        type: types.CHANGE_LANG,
        lang,
      }),
    )
    s.toEqual({
      lang,
      userData: {},
      projectData: {},
    })
    s.toMatchSnapshot()
  })

  it('should handle RENDER_DATA', () => {
    const data = { userData: 6, projectData: 'f' }

    const s = expect(
      reducer(initialState, {
        type: types.RENDER_DATA,
        data,
      }),
    )
    s.toEqual({
      lang: null,
      ...data,
    })
    s.toMatchSnapshot()
  })

  it('should handle IMPORT_JSON', () => {
    const data = { userData: 'n', projectData: 7 }

    const s = expect(
      reducer(initialState, {
        type: types.IMPORT_JSON,
        data,
      }),
    )
    s.toEqual({
      lang: null,
      ...data,
    })
    s.toMatchSnapshot()
  })
})
