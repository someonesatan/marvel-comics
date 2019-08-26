import { 
  ComicsCardState, 
  SET_COMICS_INFO, 
  ComicsCardActionTypes,
  CLEAR_INFO,
  SET_CHARACTERS
} from './types'

const initialState: ComicsCardState = {
  comicsInfo: {},
  characters: []
}

export function comicsCardReducer(
  state = initialState,
  action: ComicsCardActionTypes
): ComicsCardState {
  switch (action.type) {
    case SET_COMICS_INFO:
      return {
        ...state,
        comicsInfo: action.data
      }
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.data
      }
    case CLEAR_INFO:
      return {
        ...state,
        comicsInfo: {},
        characters: []
      }
    default: return state
  }
}