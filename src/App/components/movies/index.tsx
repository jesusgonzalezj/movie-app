import { Pagination } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState, FC, ChangeEvent } from 'react';
import getAllMovie from '../../../services/movieApi/getAllMovie';
import { MovieResultI } from '../../types';
import Header from '../header';
import Card from './card/index';

const Movies: FC = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [debounce, setDebounce] = useState<string | null>(null);
  const [movies, setMovies] = useState<MovieResultI | null>(null);
  const [countPages, setCountPages] = useState<number>();
  const [page, setPage] = useState<number>(1);

  const handleChangePage = (
    event: ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    getAllMovie({ page, searchValue }).then(({ data }) => setMovies(data));
  }, [page]);

  useEffect(() => {
    setCountPages(movies?.total_pages);
  }, [movies]);

  useEffect(() => {
    if (searchValue === '') {
      getAllMovie({}).then(({ data }) => setMovies(data));
    }
    if (debounce) {
      setPage(1);
    }
  }, [debounce, searchValue]);

  return (
    <>
      <Stack alignItems="center" spacing={2}>
        <Header
          setMovies={setMovies}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setDebounce={setDebounce}
        />
        <Pagination
          color="primary"
          style={{ margin: 20 }}
          count={countPages}
          page={page}
          defaultPage={page}
          onChange={handleChangePage}
          shape="rounded"
        />
      </Stack>
      <Card movies={movies} />
    </>
  );
};

export default Movies;
