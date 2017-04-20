import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import NewPlaylist from './new_playlist';

class MusicNavbar extends React.Component {

  render() {
    const { path } = this.props;
    let newPlaylist;
    if (path === '/mymusic/playlists') {
      newPlaylist = <NewPlaylist />;
    }

    return(
      <nav>
        <Link to={ path + '/playlists' }>Playlists</Link>
        <Link to={ path + '/songs' }>Songs</Link>
        <Link to={ path + '/albums' }>Albums</Link>
        <Link to={ path + '/artists' }>Artists</Link>
        { newPlaylist }
      </nav>
    );
  }
}

export default withRouter(MusicNavbar);