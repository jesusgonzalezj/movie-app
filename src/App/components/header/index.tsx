import AppBar from '@mui/material/AppBar';
import { InputAdornment } from '@mui/material';
import search from '../../../services/movieApi/search';
import { FC, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { HeaderI } from '../../types';
import SearchIcon from '@mui/icons-material/Search';
import { StyledBanner, StytedSearch } from '../movies/styles';

const Header: FC<HeaderI> = ({
  setMovies,
  searchValue,
  setSearchValue,
  setDebounce
}) => {
  const debouncedSearch = useDebounce(searchValue, 600);

  useEffect(() => {
    if (debouncedSearch) {
      search(debouncedSearch).then(({ data }) => {
        setMovies(data);
      });
      setDebounce(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <AppBar position="static" color="inherit">
      <StyledBanner>
        <StytedSearch
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          placeholder="Search..."
          size="medium"
        />
      </StyledBanner>
    </AppBar>
  );
};
export default Header;
