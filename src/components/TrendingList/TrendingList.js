import { Item, List, Title, TrendingContainer } from './TrendingList.styled';

export default function TrendingList({ movies }) {
  return (
    <TrendingContainer>
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <a href={`/${movie.id}`}>{movie.title}</a>
          </Item>
        ))}
      </List>
    </TrendingContainer>
  );
}
