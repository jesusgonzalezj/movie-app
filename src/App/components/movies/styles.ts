import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledContainer = styled('div')`
  text-align: center;
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 230px;
    margin-bottom: 2rem;
  }
`;

export const StyledMovieList = styled('ul')`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
  margin-top: 20px;
`;

export const StyledCard = styled('div')`
  transition: all 0.3s;
  :hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

export const StyledBanner = styled('div')`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('https://images5.alphacoders.com/119/1192508.jpg');
  background-position: center;
  background-size: cover;
  height: 59vh;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StytedSearch = styled(TextField)`
  background-color: white;
  border-radius: 5px;
  width: 440px;
`;
