import { 
  ComicsState, 
  ComicsActionTypes, 
  ADD_COMICS_LIST,
  SET_OFFSET,
  SET_FILTER,
  CLEAR_RECORDS
} from './types'

const initialState: ComicsState = {
  comicsList: {},
  offset: 0,
  filter: {
    order: 'title',
    name: ''
  }
}

export function comicsReducer(
  state = initialState,
  action: ComicsActionTypes
): ComicsState {
  switch (action.type) {
    case ADD_COMICS_LIST:
      return {
        ...state,
        comicsList: {
          ...state.comicsList,
          ...action.data
        }
      }
    case SET_OFFSET:
      return {
        ...state,
        offset: action.data
      }
    case SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.field]: action.data
        }
      }
    case CLEAR_RECORDS:
      return {
        ...state,
        comicsList: {},
        offset: 0
      }
    default: return state
  }
}