import { useState, useEffect } from 'react';
import { apiCast } from '../../api';
import { useParams } from 'react-router-dom';
import { MovieLoader } from 'components/Loader/Loader';
import { List, Title } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const response = await apiCast({ id: movieId });
        const castResponse = response.cast;
        const info = castResponse.map(item => ({
          id: item.id,
          img: item.profile_path
            ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
            : 'https://placehold.it/300x450?text=Image_not_found',
          name: item.name,
          char: item.character,
        }));
        setCastInfo(info);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchCast();
    }
  }, [movieId]);

  return (
    <div>
      {isLoading && <MovieLoader />}
      {isError && <div>Error fetching cast</div>}
      {castInfo && castInfo.length > 0 ? (
        <List>
          {castInfo.map(item => (
            <div key={item.id}>
              <img src={item.img} alt={item.name} />
              <Title>Name: {item.name}</Title>
              <Title>Character: {item.char}</Title>
            </div>
          ))}
        </List>
      ) : (
        <p>No cast information</p>
      )}
    </div>
  );
}
