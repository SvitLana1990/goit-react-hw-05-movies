import styled from 'styled-components';

export const ReviewContainer = styled.div`
  padding: ${p => p.theme.spacing(4)};
`;

export const Item = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
`;
