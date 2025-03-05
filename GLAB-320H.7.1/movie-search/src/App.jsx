import { useState, useEffect } from 'react'
import './App.css'
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form"
import RandomNumber from './data/RandomNumber';
import Loading from './components/Loading';
import movies from './data/movisIds.js'
const BASE_URL = "http://www.omdbapi.com/?";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMovie = async (searchTerm) => {
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}apiKey=${API_KEY}&t=${searchTerm}`);
      const data = await response.json();
      console.log(`here=> ${data}`)
      setMovie(data);
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const index = RandomNumber(0, movies.length - 1);
    console.log(`index=> ${index}`);
    const id = movies[index];

    (async () => {
      try {
        const response = await fetch(`${BASE_URL}apiKey=${API_KEY}&i=${id}`);
        const data = await response.json();
        setLoading(false);
        setMovie(data);
      } catch (e) {
        console.error(e)
      }
    })();
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      {
        loading && <Loading />}
      {
        movie && <MovieDisplay movie={movie} />
      }
    </div>
  )
}

export default App
