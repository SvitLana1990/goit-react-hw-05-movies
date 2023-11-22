import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: ${p => p.theme.spacing(3)};
  border: 2px solid ${p => p.theme.colors.green};
  border-radius: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(10)};
`;

export const NavItem = styled.li`
  font-size: 28px;
  font-weight: 700;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${p => p.theme.colors.green};
  }
`;
