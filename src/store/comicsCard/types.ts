export interface ComicsCardState {
  comicsInfo: ComicsInfo
  characters: Character[]
}

export interface ComicsInfo {
  id?: number
  description?: string
  title?: string
  thumbnail?: ComicsImage
}

export interface Character {
  id?: number
  thumbnail?: ComicsImage
  name?: string
}

interface ComicsImage {
  path: string
  extension: string
}

export const SET_COMICS_INFO = 'SET_COMICS_INFO'
export const CLEAR_INFO = 'CLEAR_INFO'
export const SET_CHARACTERS = 'SET_CHARACTERS'

interface ClearInfo {
  type: typeof CLEAR_INFO
}

interface SetComicsInfoAction {
  type: typeof SET_COMICS_INFO,
  data: ComicsInfo
}

interface SetCharacters {
  type: typeof SET_CHARACTERS,
  data: Character[]
}

export type ComicsCardActionTypes = 
  SetComicsInfoAction | 
  ClearInfo | 
  SetCharacters