import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './Layout/Layout.js';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
      <GlobalStyle />
    </div>
  );
};
