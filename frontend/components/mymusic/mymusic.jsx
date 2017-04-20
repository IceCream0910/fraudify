import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { fetchPlaylists, createPlaylist } from '../../actions/playlist_actions';
import MusicNavbar from '../shared/music_navbar';

class MyMusic extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.router.push('/login');
    }
  }

  render() {
    return(
      <div>
        <h1>MY MUSIC</h1>
        <MusicNavbar
          path={ this.props.location.pathname }
          createPlaylist={ this.props.createPlaylist }
        />

        { this.props.children }
        <button onClick={ this.props.logOut }>Log Out</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);
