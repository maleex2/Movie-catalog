import React, {useEffect, useState} from 'react';
import { FaLinkedinIn , FaGithub } from 'react-icons/fa';
import {  AiOutlineProfile, AiOutlineMail} from 'react-icons/ai';
import {  CgProfile} from 'react-icons/cg';


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
    <div className="nav">
      <h1>The Movie Catalog</h1>
      <header>
        
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
    </div>
    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => (
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
    <footer className="footer">
      <a href="mailto:kyhar70@gmail.com" className="footer__link">Portfolio link</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="">
          <AiOutlineMail />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="">
          <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  </>
  );
}

export default App;
