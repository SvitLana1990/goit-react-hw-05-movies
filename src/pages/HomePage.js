// HomePage.jsx
import { toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { apiFetchTrendingMovies } from 'api';
import { MovieLoader } from 'components/Loader/Loader';
import TrendingList from 'components/TrendingList/TrendingList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await apiFetchTrendingMovies();
        const newMovies = response.data.results;

        if (newMovies.length === 0) {
          toast.error('No movies for your request');
        } else {
          setMovies([...newMovies]);
        }
      } catch (error) {
        toast.error('Oops! Something went wrong! Try reloading the page!');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isError && <div>Unable to fetch movies. Please try again.</div>}
      {movies.length > 0 && <TrendingList movies={movies} />}
      {isLoading && <MovieLoader />}
    </div>
  );
}
