import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const defaultState = {
  artists: [],
  playlists: []
};

const FollowsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      if (action.follow.followableType === 'Playlist') {
        newState.playlists.push(action.follow.followableId);
      } else {
        newState.artists.push(action.follow.followableId);
      }
      return newState;
    case REMOVE_FOLLOW:
      let index;
      if (action.follow.followableType === 'Playlist') {
        index = newState.playlists.indexOf(action.follow.followableId);
        newState.playlists.splice(index, 1);
      } else {
        index = newState.artists.indexOf(action.follow.followableId);
        newState.artists.splice(index, 1);
      }
      return newState;
    default:
      return state;
  }
};

export default FollowsReducer;
