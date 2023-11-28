import { useState, useEffect } from 'react';
import { apiReviews } from '../../api';
import { useParams } from 'react-router-dom';
import { MovieLoader } from 'components/Loader/Loader';
import { ReviewContainer, Item } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await apiReviews({ id: movieId });
        const castResponse = response.results;
        const info = castResponse.map(item => ({
          id: item.id,
          author: item.author,
          review: item.content,
        }));
        setReviews(info);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);
  return (
    <ReviewContainer>
      {isLoading && <MovieLoader />}
      {isError && <div>Error fetching reviews</div>}

      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <Item key={item.id}>
              <p>Name: {item.author}</p>
              <p>Review: {item.review}</p>
            </Item>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </ReviewContainer>
  );
}
