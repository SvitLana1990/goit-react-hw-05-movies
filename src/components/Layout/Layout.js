import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, List, NavItem, StyledNavLink } from './Layout.styled';
import { MovieLoader } from '../Loader/Loader';

export default function SharedLayout() {
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
      <div>
        <Suspense fallback={<MovieLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
