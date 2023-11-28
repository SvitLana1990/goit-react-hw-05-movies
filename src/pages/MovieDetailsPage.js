import { toast } from 'react-hot-toast';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { apiMovieDetails } from 'api';
import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { MovieLoader } from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { StyledNavBack } from 'components/MovieDetails/MovieDetails.styled';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await apiMovieDetails({ id: movieId });

        const responseInfo = {
          imageUrl: response.poster_path
            ? `https://image.tmdb.org/t/p/w300${response.poster_path}`
            : 'https://placehold.it/300x450?text=Image_not_found',
          title: response.title,
          release_date: response.release_date.slice(0, 4),
          overview:
            response.overview !== ''
              ? response.overview
              : 'There is no overview',
          genres:
            response.genres.length > 0
              ? response.genres?.map(genre => genre.name).join(', ')
              : 'No genres',
          vote_average: response.vote_average,
        };

        setDetails(responseInfo);
        return response;
      } catch (error) {
        setIsError(true);
        toast.error('Error fetching movie details');
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <div>
      {isLoading && <MovieLoader />}
      {isError && <div>Error fetching movie details</div>}
      <StyledNavBack to={backLinkRef.current}>
        <b>
          <IoMdArrowRoundBack size={20} />
          Go back
        </b>
      </StyledNavBack>
      {details && <MovieDetails data={details} />}
      <Outlet />
    </div>
  );
}
