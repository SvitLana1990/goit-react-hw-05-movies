import { toast } from 'react-hot-toast';
import { apiMovieDetails } from 'api';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { MovieLoader } from 'components/Loader/Loader';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location);
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await apiMovieDetails({ value: params.movieId });
        if (!response.data || response.data.results.length === 0) {
          toast.error('Movie not found');
          setIsError(true);
        } else {
          setMovie(response.data.results[0]);
        }
      } catch (error) {
        console.error('Error fetching movie:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [params.movieId]);

  return (
    <div>
      {isError && <div>Unable to fetch movies. Please try again.</div>}

      {isLoading && <MovieLoader />}
      <Link to={backLinkRef.current.state?.from ?? '/movies'}>
        <b>Back to movies</b>
      </Link>
      {movie && <h1>{movie.title}</h1>}

      <ul>
        <li>
          <NavLink to={`${location.pathname}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${location.pathname}/reviews`}>Reviews</NavLink>
        </li>
      </ul>

      <Outlet key={movie?.id} />
    </div>
  );
}
