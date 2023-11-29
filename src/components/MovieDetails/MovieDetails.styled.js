import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};
`;

export const MovieDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
`;

export const MovieDetailsTitle = styled.h2`
  color: ${p => p.theme.colors.green};
  font-size: 26px;
`;

export const MovieSecondTitle = styled.h3`
  color: ${p => p.theme.colors.green};
  font-size: 20px;
`;

export const MovieNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
`;

export const StyledNavLink = styled(NavLink)`
  color: ${p => p.theme.colors.green};
  font-size: 26px;
  text-decoration: underline;
  &:hover {
    color: ${p => p.theme.colors.black};
    font-weight: 600;
  }
`;

export const StyledNavBack = styled(NavLink)`
  padding: ${p => p.theme.spacing(4)};
  color: ${p => p.theme.colors.green};
  font-size: 26px;
  text-decoration: underline;
`;
