import Movie from "../components/Movie";
import { useEffect, useState } from "react";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const url = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const getMovies = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              genre_ids={movie.genre_ids}
              key={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
