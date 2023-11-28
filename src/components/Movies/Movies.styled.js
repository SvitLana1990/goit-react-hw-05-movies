import styled from 'styled-components';

export const SearchBar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: ${p => p.theme.spacing(6)};
  padding-left: ${p => p.theme.spacing(6)};
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.green};
  border-radius: 6px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  width: 48px;
  height: 48px;
  padding: ${p => p.theme.spacing(2)};
  background-color: ${p => p.theme.colors.lightGreen};
  border: none;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.2, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.spacing(1)};
  padding-right: ${p => p.theme.spacing(1)};
  &::placeholder {
    font-size: 18px;
  }
`;

export const MovieContainer = styled.div`
  padding: ${p => p.theme.spacing(3)};
`;

export const SearchList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
`;

export const SearchMovieTitle = styled.h3`
  &:hover {
    color: ${p => p.theme.colors.green};
  }
`;
