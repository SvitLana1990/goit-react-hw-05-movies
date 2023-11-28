import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: ${p => p.theme.spacing(5)};
  column-gap: ${p => p.theme.spacing(3)};
`;

export const Title = styled.p`
  color: ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.spacing(4)};
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  max-width: 300px;
  overflow-wrap: break-word;
`;
