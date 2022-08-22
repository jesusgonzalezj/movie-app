import MovieApi from '../index';

interface getDetailI {
  movieId: number | null;
}

export default async function getDetail({ movieId }: getDetailI) {
  const movieApi = await MovieApi().get(`/movie/${movieId}`);
  return movieApi;
}
