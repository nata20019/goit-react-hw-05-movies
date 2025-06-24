import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className="container">
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MoviesList;
