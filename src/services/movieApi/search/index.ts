import MovieApi from '../index';

export default async function search(query: string) {
  const movieApi = await MovieApi().get('/search/movie', {
    params: {
      query
    }
  });
  return movieApi;
}
