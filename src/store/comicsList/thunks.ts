import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { addComicsList, setOffset, clearRecords } from './actions'
import { AppState } from '../index'

import { Comics, ComicsInfo } from './types'


export const getComicsList = (withClearRecords: boolean, cb: () => void): ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {

  if (withClearRecords) {
    dispatch(clearRecords())
  } 

  const offset = getState().comics.offset
  const filter = getState().comics.filter

  let queri = `&orderBy=${filter.order}`

  if (filter.name) {
    queri+= `&titleStartsWith=${filter.name}`
  }

  let uri: string = `https://gateway.marvel.com/v1/public/comics?apikey=57be3c4e747057de04351e862aaa6496&offset=${offset}${queri}`


  fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => {
    let records: Comics = {}
    response.data.results.forEach((item: ComicsInfo) => {
      let key: string = `id-${item.id}`
      records[key] = item
    })

    let newOffset = offset + response.data.count 
    dispatch(addComicsList(records))
    dispatch(setOffset(newOffset))
    cb()
  })
  .catch(error => console.error('Error:', error))
}