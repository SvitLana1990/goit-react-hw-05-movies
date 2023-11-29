import { CgSearchLoading } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchInput,
} from '../components/Movies/Movies.styled';
import { apiSearchMovies } from 'api';
import { MovieLoader } from '../components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) return;
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const results = await apiSearchMovies(query);
        setSearchResults(results);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearch();
  }, [query, searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.search.value.trim().toLowerCase();

    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchBar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <CgSearchLoading style={{ height: 30, width: 30 }} />
          </SearchFormButton>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="search"
          />
        </SearchForm>
      </SearchBar>

      {isLoading && <MovieLoader />}

      {isError && <div>Ooops! Error during search</div>}
      {searchResults.length > 0 && <MoviesList movies={searchResults} />}
    </>
  );
}
