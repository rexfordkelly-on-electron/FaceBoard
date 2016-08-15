import axios from 'axios';
import { FETCHING_PRIVATE_MESSAGES } from './action';

export function getAllMessages () {
  return function (dispatch) {
    dispatch({type: 'FETCHING_MESSAGES'});
    // axios.get('https://face-board.herokuapp.com/messages/findAllMessages')
    axios.get('http://localhost:3000/messages/findAllMessages')
    .then( (response) => {
      dispatch({type: 'MESSAGES_FETCHED',
      payload: response.data });
    })
    .catch( (error) => {
      dispatch({type: 'MESSAGES_ERROR',
      error: error });
    });
  };
}

export function getPrivateMessages () {
  return function (dispatch) {
    dispatch({type: FETCHING_PRIVATE_MESSAGES});

    axios.post('http://localhost:3000/messages/private/findAll')
      .then((response) => {
        dispatch({type: 'MESSAGES_FETCHED',
        payload: response.data });
      })
      .catch((error) => {
        dispatch({type: 'MESSAGES_ERROR',
        error: error });
      });
  };
}