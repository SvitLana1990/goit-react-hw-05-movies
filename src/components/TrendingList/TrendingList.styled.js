import styled from 'styled-components';

export const TrendingContainer = styled.div`
  padding: ${p => p.theme.spacing(3)};
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.green};
  margin-bottom: ${p => p.theme.spacing(4)};
  font-weight: 500;
  font-size: 24px;
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
`;

export const Item = styled.li`
  font-weight: 400;
  font-size: 20px;
  font-style: italic;
  text-decoration: underline;
  &:hover {
    color: ${p => p.theme.colors.green};
  }
`;
