import * as types from '../actions/action-types';

export default (state = { events: [], isFetching: false }, action) => {
  const newState = Object.assign({}, state);;

  switch (action.type) {
    case types.FETCH_EVENT_IN_PROGRESS:
      newState.isFetching = true;
      return newState;

    case types.FETCH_EVENT_COMPLETE:
      newState.isFetching = false;
      newState.events = action.data.events
      return newState;

    default:
      return state;
  }
};