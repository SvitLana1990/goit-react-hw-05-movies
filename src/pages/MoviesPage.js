import { CgSearchLoading } from 'react-icons/cg';
import { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchInput,
  SearchList,
  SearchMovieTitle,
  MovieContainer,
} from '../components/Movies/Movies.styled';
import { apiSearchMovies } from 'api';
import { MovieLoader } from '../components/Loader/Loader';

export default function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const handleSearch = async value => {
    try {
      setIsLoading(true);
      const results = await apiSearchMovies(value);
      setSearchResults(results);
      setSearchParams({ query: value });
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };

  const handleSubmit = value => {
    setSearchParams({ query: value });
    handleSearch(value);
  };

  return (
    <>
      <SearchBar>
        <SearchForm
          onSubmit={event => {
            event.preventDefault();
            const searchValue = event.target[1].value;
            if (searchValue) {
              handleSubmit(searchValue);
              event.target[1].value = '';
            }
          }}
        >
          <SearchFormButton type="submit">
            <CgSearchLoading style={{ height: 30, width: 30 }} />
          </SearchFormButton>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </SearchForm>
      </SearchBar>

      {isLoading && <MovieLoader />}

      {isError && <div>Ooops! Error during search</div>}
      {searchResults.length > 0 && (
        <MovieContainer>
          <SearchList>
            {searchResults.map(movie => (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>
                  <SearchMovieTitle>{movie.title}</SearchMovieTitle>
                </NavLink>
              </li>
            ))}
          </SearchList>
        </MovieContainer>
      )}
    </>
  );
}
