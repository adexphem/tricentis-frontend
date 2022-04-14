export const GET_ALBUM = 'GET_ALBUM';
export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
export const GET_ALBUM_FAILURE = 'GET_ALBUM_FAILURE';

export const loadAlbum = () => ({
    type: GET_ALBUM
});

export const setAlbumSuccess = (albums) => ({
    type: GET_ALBUM_SUCCESS, albums
});

export const setAlbumFailure = (error) => ({
    type: GET_ALBUM_FAILURE, error
});
