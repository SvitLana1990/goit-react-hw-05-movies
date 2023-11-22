import { GlobalStyle } from 'GlobalStyle';
import { Toaster } from 'react-hot-toast';

import HomePage from 'pages/Home';
import MovieDetailsPage from 'pages/MovieDetails';
import MoviesPage from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Header, List, NavItem, StyledNavLink } from './App.styled';

export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <List>
            <NavItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </NavItem>
          </List>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
      <GlobalStyle />
      <Toaster />
    </div>
  );
};
