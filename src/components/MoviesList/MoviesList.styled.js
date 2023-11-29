import styled from 'styled-components';

export const MovieContainer = styled.div`
  padding: ${p => p.theme.spacing(3)};
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.green};
  margin-bottom: ${p => p.theme.spacing(4)};
  font-weight: 500;
  font-size: 30px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: ${p => p.theme.spacing(5)};
  column-gap: ${p => p.theme.spacing(3)};
`;

export const Item = styled.h3`
  font-size: 24px;
  font-style: italic;
  text-decoration: underline;
  max-width: 300px;
  overflow-wrap: break-word;
  text-align: center;
  &:hover {
    color: ${p => p.theme.colors.green};
  }
`;
