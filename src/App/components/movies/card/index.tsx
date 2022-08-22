import { FC, useState } from 'react';
import { CardI, MovieDetailI } from '../../../types';
import MovieDetails from '../details';
import { StyledContainer, StyledMovieList, StyledCard } from '../styles';
import { Rating } from '@mui/material';

const MovieCard: FC<CardI> = ({ movies }) => {
  const [open, setOpen] = useState(false);
  const [movieId, setMovieId] = useState<number | null>(null);
  const [value, setValue] = useState<number | null>();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = (id: number) => {
    handleOpen();
    setMovieId(id);
  };

  const movie = movies?.results
    ?.filter((f) =>
      value
        ? Math.round(f.vote_average) === value
        : f.vote_average && f.poster_path !== null
    )
    .map((movie: MovieDetailI) => (
      <li key={movie.id}>
        <StyledCard onClick={() => handleClick(movie.id)}>
          <img src={`${process.env.REACT_APP_API_IMG}/${movie.poster_path}`} />
        </StyledCard>
      </li>
    ));

  return (
    <StyledContainer>
      <Rating
        name="size-medium"
        precision={1}
        size="large"
        value={value}
        max={10}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <StyledMovieList>{movie}</StyledMovieList>
      <MovieDetails movieId={movieId} open={open} handleClose={handleClose} />
    </StyledContainer>
  );
};

export default MovieCard;
