export interface ComicsState {
  comicsList: Comics
  offset: number
  filter: Filter
}

export interface Comics {
  [id: string]: ComicsInfo
}

export interface ComicsInfo {
  id: number
  title: string
  thumbnail: ComicsImage
}

interface ComicsImage {
  path: string
  extension: string
}

export interface Filter {
  name: string
  order: string
}

export const ADD_COMICS_LIST = 'ADD_COMICS_LIST'
export const SET_OFFSET = 'SET_OFFSET'
export const SET_FILTER = 'SET_FILTER'
export const CLEAR_RECORDS = 'CLEAR_RECORDS'

interface AddComicsListAction {
  type: typeof ADD_COMICS_LIST,
  data: Comics
}

interface SetOffsetAction {
  type: typeof SET_OFFSET,
  data: number
}

interface SetFilter {
  type: typeof SET_FILTER,
  field: string
  data: string
}

interface ClearRecords {
  type: typeof CLEAR_RECORDS
}

export type ComicsActionTypes = 
  AddComicsListAction | 
  SetOffsetAction | 
  SetFilter |
  ClearRecords