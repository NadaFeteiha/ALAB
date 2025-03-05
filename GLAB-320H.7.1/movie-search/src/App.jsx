import { useState, useEffect } from 'react'
import './App.css'
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form"
import RandomNumber from './data/RandomNumber';
import Loading from './components/Loading';

const BASE_URL = "http://www.omdbapi.com/?";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async (searchTerm) => {
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}apiKey=${API_KEY}&t=${searchTerm}`);
      const data = await response.json();      

      setInterval(() => {
        setLoading(false);
        setMovie(data);
      }, 1000);

    } catch (e) {
      console.error(e)
    }
  };

  useEffect(() => {
    //tt120 1607
    const id = `tt1201607`//${RandomNumber()}${RandomNumber()};
    console.log(id);

    (async () => {
      try {
        const response = await fetch(`${BASE_URL}apiKey=${API_KEY}&i=${id}`);
        const data = await response.json();
        console.log(`**************** ${data.Title} ****************`);
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
      <Loading isLoading={loading} />
      <MovieDisplay movie={movie} isLoading={loading} />
    </div>
  )
}

export default App
