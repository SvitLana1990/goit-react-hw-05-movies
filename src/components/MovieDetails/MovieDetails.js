import {
  MovieDetailsContainer,
  MovieDetailsInfo,
  MovieDetailsTitle,
  MovieSecondTitle,
} from './MovieDetails.styled';
import {
  MovieNavList,
  StyledNavLink,
} from 'components/MovieDetails/MovieDetails.styled';

export default function MovieDetails({ data }) {
  const { imageUrl, title, release_date, vote_average, overview, genres } =
    data;

  return (
    <MovieDetailsContainer>
      <img src={imageUrl} alt={title} height="300" />
      <MovieDetailsInfo>
        <MovieDetailsTitle>
          {title}
          <span> ({release_date})</span>
        </MovieDetailsTitle>
        <p>User score: {vote_average}</p>
        <MovieSecondTitle>Overview</MovieSecondTitle>
        <p>{overview}</p>
        <MovieSecondTitle>Genres</MovieSecondTitle>
        <p>{genres}</p>
        <nav>
          <MovieNavList>
            <li>
              <StyledNavLink to={`cast`}>Cast</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={`reviews`}>Reviews</StyledNavLink>
            </li>
          </MovieNavList>
        </nav>
      </MovieDetailsInfo>
    </MovieDetailsContainer>
  );
}
