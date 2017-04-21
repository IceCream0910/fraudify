export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlists'
  })
);

export const createPlaylist = playlist => (
  $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: { playlist }
  })
);

export const updatePlaylist = playlist => {
  debugger
  return(
    $.ajax({
      method: 'PATCH',
      url: `/api/playlists/${playlist.id}`,
      data: { playlist }
    })
  );
};

export const deletePlaylist = playlistId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${playlistId}`
  })
);
