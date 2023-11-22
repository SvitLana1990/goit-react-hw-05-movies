import { CgSearchLoading } from 'react-icons/cg';

import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchInput,
} from '../components/Movies/Movies.styled';

export default function MoviesPage({ onSubmit }) {
  return (
    <SearchBar>
      <SearchForm
        onSubmit={event => {
          event.preventDefault();
          onSubmit(event.target[1].value);
          event.target[1].value = '';
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
        />
      </SearchForm>
    </SearchBar>
  );
}
