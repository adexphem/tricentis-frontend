import { axiosInstance } from './connector';

export const bandsAPI = {
  getAlbums(album) {
    return axiosInstance.get(`?limit=5&term=${album}`);
  }
};
