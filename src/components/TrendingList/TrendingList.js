import { Link } from 'react-router-dom';
import { Item, List, Title, TrendingContainer } from './TrendingList.styled';

export default function TrendingList({ movies }) {
  return (
    <TrendingContainer>
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </Item>
        ))}
      </List>
    </TrendingContainer>
  );
}
