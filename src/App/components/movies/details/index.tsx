import { Chip, Grid, Modal } from '@mui/material';
import React, { FC, ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import getDetail from '../../../../services/movieApi/getDetail';
import { GenreI, MovieDetailI, MovieDetailsI } from '../../../types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const MovieDetails: FC<MovieDetailsI> = ({ movieId, open, handleClose }) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetailI>();

  useEffect(() => {
    if (movieId) {
      getDetail({ movieId }).then(({ data }) => setMovieDetail(data));
    }
  }, [movieId]);

  const genres = movieDetail?.genres.map((genre: GenreI) => (
    <div style={{ flexDirection: 'column', marginBottom: 5 }}>
      <Chip label={genre.name} color="primary" />
    </div>
  ));

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography alignItems="center" variant="h6" component="h2">
          {movieDetail?.original_title}
        </Typography>
        <Grid container>
          <Grid item xs={8} md={8}>
            <img
              style={{ width: '90%' }}
              src={`${process.env.REACT_APP_API_IMG}/${movieDetail?.poster_path}`}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <Typography>
              Original title: {movieDetail?.original_title}
            </Typography>
            <Typography>Lang: {movieDetail?.original_language}</Typography>
            <Typography>
              Release: {movieDetail?.release_date as ReactNode}
            </Typography>
            <Typography>
              Rating: {movieDetail?.vote_average.toFixed(1)}
            </Typography>
            <Typography>Votes Qty: {movieDetail?.vote_count}</Typography>
            <Typography>Genres: {genres}</Typography>
          </Grid>
          <Grid item xs={16} md={16}>
            {movieDetail?.overview && (
              <>
                <Typography variant="subtitle1">Overview</Typography>
                <Typography variant="body2">{movieDetail?.overview}</Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default MovieDetails;
