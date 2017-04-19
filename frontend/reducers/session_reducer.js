import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      // const newState = merge({}, state, { errors });
      // return merge({}, state, { errors: action.errors });
      return Object.assign({}, state, { errors });
    default:
      return state;
  }
};

export default SessionReducer;