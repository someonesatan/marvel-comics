export interface ComicsState {
  comicsList: Comics[]
  offset?: number
}

export interface Comics {
  id: number
  title: string
  thumbnail: ComicsImage
}

interface ComicsImage {
  path: string
  extension: string
}

export const ADD_COMICS_LIST = 'ADD_COMICS_LIST'

interface AddComicsListAction {
  type: typeof ADD_COMICS_LIST,
  data: Comics[]
}

export type ComicsActionTypes = AddComicsListAction