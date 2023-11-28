// TrendingList.jsx
import { Link } from 'react-router-dom';
import { Item, List, Title, TrendingContainer } from './TrendingList.styled';

export default function TrendingList({ movies }) {
  return (
    <TrendingContainer>
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                height="300"
              />
              <Item>{movie.title}</Item>
            </Link>
          </li>
        ))}
      </List>
    </TrendingContainer>
  );
}
