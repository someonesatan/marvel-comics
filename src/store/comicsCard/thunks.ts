import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { setComicsInfo, setCharacters } from './actions'
import { AppState } from '../index'

export const getComicsInfo = (comicsId: string, cb: () => void):ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  let uri: string = `https://gateway.marvel.com/v1/public/comics/${comicsId}?apikey=57be3c4e747057de04351e862aaa6496`

  fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => {
    dispatch(setComicsInfo(response.data.results[0]))
    cb()
  })
  .catch(error => console.error('Error:', error))
}

export const getCharacters = (comicsId: string):ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  let uri: string = `https://gateway.marvel.com/v1/public/comics/${comicsId}/characters?apikey=57be3c4e747057de04351e862aaa6496`

  fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => {
    dispatch(setCharacters(response.data.results))
  })
  .catch(error => console.error('Error:', error))
}