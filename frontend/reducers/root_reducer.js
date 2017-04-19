import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PlaylistsReducer from './playlists_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistsReducer
});

export default RootReducer;
