import { ADD_COMICS_LIST, Comics } from './types'

export function addComicsList(comicsList: Comics[]) {
  return {
    type: ADD_COMICS_LIST,
    data: comicsList
  }
}