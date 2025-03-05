import { useState, useEffect, cache } from 'react'
import './App.css'
import API_KEY from './data/ApiKey'

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form"
import RandomNumber from './data/RandomNumber';

const BASE_URL = "http://www.omdbapi.com/?";

function App() {
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`${BASE_URL}apiKey=${API_KEY}&t=${searchTerm}`);
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e)
    }
  };


  useEffect(() => {
    //tt120 1607
    const id = `tt120160${RandomNumber()}${RandomNumber()}`;
    console.log(id);

    (async () => {
      try {
        const response = await fetch(`${BASE_URL}apiKey=${API_KEY}&i=${id}`);
        const data = await response.json();
        console.log(`**************** ${data.Title} ****************`);
        setMovie(data);
      } catch (e) {
        console.error(e)
      }
    })();

  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  )
}

export default App
