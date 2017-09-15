import * as types from './action-types';
import axios from 'axios';

export function fetchEvents() {

  let url = 'https://www.eventbriteapi.com/v3/events/search/?token=VBUSKKCQ2VTXKPOP34PX';

  return (dispatch) => {
    dispatch({ type: types.FETCH_EVENT_IN_PROGRESS })
    axios.get(url)
      .then((response) => {
        dispatch({
          type: types.FETCH_EVENT_COMPLETE,
          data: response.data
        })
      })
      .catch((response) => {
        dispatch({
          type: types.FETCH_EVENT_FAILED,
          error: response
        })
      }
      )
  }
}; 