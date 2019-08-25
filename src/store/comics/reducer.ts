import { ComicsState, ComicsActionTypes, ADD_COMICS_LIST } from './types'

const initialState: ComicsState = {
  comicsList: [],
  offset: 0
}

export function comicsReducer(
  state = initialState,
  action: ComicsActionTypes
): ComicsState {
  switch (action.type) {
    case ADD_COMICS_LIST:
      return {
        ...state,
        comicsList: action.data
      }
    default: return state
  }
}