import {GET_ALBUM, GET_ALBUM_FAILURE, GET_ALBUM_SUCCESS} from './actionCreators';

const initialState = {
  albums: [],
  isLoading: false,
  error: null
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM_SUCCESS:
      return {
        ...state,
        albums: action.albums,
        isLoading: false
      };
    case GET_ALBUM:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALBUM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
