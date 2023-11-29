import { Link, useLocation } from 'react-router-dom';
import { Item, List, MovieContainer } from './MoviesList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <MovieContainer>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  height="300"
                />
              ) : (
                <img
                  src="https://placehold.it/300x450?text=Image_not_found"
                  alt={movie.title || 'Image not found'}
                  height="300"
                />
              )}
              <Item>{movie.title}</Item>
            </Link>
          </li>
        ))}
      </List>
    </MovieContainer>
  );
}
