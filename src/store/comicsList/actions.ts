import { 
  ADD_COMICS_LIST, 
  SET_OFFSET, 
  CLEAR_RECORDS,
  SET_FILTER, 
  Comics, 
} from './types'

export function addComicsList(comicsList: Comics) {
  return {
    type: ADD_COMICS_LIST,
    data: comicsList
  }
}

export function setOffset(offset: number) {
  return {
    type: SET_OFFSET,
    data: offset
  }
}

export function setFilter(field: string, filter: string) {
  return {
    type: SET_FILTER,
    field: field,
    data: filter
  }
}

export function clearRecords() {
  return {
    type: CLEAR_RECORDS
  }
}

