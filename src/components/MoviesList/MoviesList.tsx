import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      <ul>
        {
          movies.map(m => (
            <li key={m.imdbId}>
              <MovieCard movie={m} />
            </li>
          ))
        }

      </ul>
    </div>
  </>
);
