import { SET_COMICS_INFO, CLEAR_INFO, SET_CHARACTERS, ComicsInfo, Character } from './types'

export function setComicsInfo(info: ComicsInfo) {
  return {
    type: SET_COMICS_INFO,
    data: info
  }
}

export function clearInfo() {
  return {
    type: CLEAR_INFO,
  }
}

export function setCharacters(characters: Character) {
  return {
    type: SET_CHARACTERS,
    data: characters
  }
}