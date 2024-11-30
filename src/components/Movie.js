import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ poster_path, title, overview, genre_ids, id }) {
  return (
    <div key={id}>
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <img alt={title} src={poster_path} />
      <p>{overview}</p>
      <ul>
        {genre_ids.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Movie;
