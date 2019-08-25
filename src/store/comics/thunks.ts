import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { addComicsList } from './actions'
import { AppState } from '../index'


export const getComicsList = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  fetch('https://gateway.marvel.com/v1/public/comics?apikey=57be3c4e747057de04351e862aaa6496', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => {
    dispatch(addComicsList(response.data.results))
  })
  .catch(error => console.error('Error:', error))
}