import React, {useEffect, useState} from 'react';
import { FaLinkedinIn , FaGithub } from 'react-icons/fa';
import {  AiOutlineProfile, AiOutlineMail} from 'react-icons/ai';

import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


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
    <div class="leftside">
        <ul className="list">
          <li><nav><Tooltip title="LinkedIn" placement="right">
            
              <Button  variant="contained" color="primary"><a href="https://www.linkedin.com/in/martin-aleksandrov-322642195/"><FaLinkedinIn /></a></Button>
            </Tooltip></nav></li>
          <li><nav><Tooltip title="Github" placement="right">
              <Button  variant="contained" color="primary"><a href="https://github.com/maleex2"><FaGithub/></a></Button>
            </Tooltip></nav></li>
          <li><nav><Tooltip title="A simple app using OpenWeatherMap API to show current weather in a city The app is created with React, Material-UI and GSAP animations." placement="right">
              <Button variant="contained" color="primary">
             <FaGithub/>
            </Button>
            </Tooltip></nav></li>
          <li><nav><Tooltip title="CV" placement="right">
              <Button variant="contained" color="primary"><a href="https://docs.google.com/uc?export=download&id=1120Ono5lmbKgC0WS2x6qA5gX608D0qLJ"><AiOutlineProfile/></a></Button>
            </Tooltip></nav></li>
        </ul>
      </div>
      
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
      <a href="mailto:kyhar70@gmail.com" className="footer__link">Portfolio</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.linkedin.com/in/martin-aleksandrov-322642195">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="mailto:kyhar70@gmail.com">
          <AiOutlineMail />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/maleex2">
          <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  </>
  );
}

export default App;
