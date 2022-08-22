import MovieApi from '../index';

interface getAllMovieI {
  page?: number;
  searchValue?: string | null;
}

export default async function getAllMovie({ page, searchValue }: getAllMovieI) {
  const query =
    searchValue && searchValue !== '' ? '/search/movie' : '/movie/popular';
  const movieApi = await MovieApi().get(`${query}`, {
    params: {
      page,
      query: searchValue
    }
  });
  return movieApi;
}
