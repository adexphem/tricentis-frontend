import {bandsAPI} from '../services/albumApi';
import {loadAlbum, setAlbumSuccess, setAlbumFailure} from '../redux/actionCreators';

export const getBands = (band) => async dispatch => {
  dispatch(loadAlbum());
  
  try {
    const {data: {results}} = await bandsAPI.getAlbums(band);

    const albums = results.map((band) => band.collectionName);
    albums.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
    dispatch(setAlbumSuccess(albums));
  } catch (e) {
    dispatch(setAlbumFailure(e));
  }
};
