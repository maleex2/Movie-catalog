import React, {useEffect, useState} from 'react';


import Movie from './components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0aa562e5199c95e58dfcd1a3ba55ef68&page=1";



const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=0aa562e5199c95e58dfcd1a3ba55ef68&query="


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
 

  useEffect(() => {
    fetch(FEATURED_API).then(res => res.json())
    .then(data => {
      setMovies(data.results);
    });

  }, []);

const handleOnSubmit = (e) => {
  e.preventDefault();

  if(search) {
    fetch(SEARCH_API + search).then(res => res.json())
    .then(data => {
      setMovies(data.results);
    });

    setSearch('');
  }
  
};

const handleOnChange = (e) => {
  setSearch(e.target.value);
};

  return (
    <>
      <header>
        <h1>The Movie Catalog</h1>
        <form onSubmit={handleOnSubmit}>
        <input 
        type="search" 
        placeholder="Search" 
        className="search" 
        value={search} 
        onChange={handleOnChange}
        />
        </form>
      </header>
    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => (
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
  </>
  );
}

export default App;
