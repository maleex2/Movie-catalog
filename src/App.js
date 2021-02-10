import React, {useEffect, useState} from 'react';
import { FaLinkedinIn , FaGithub } from 'react-icons/fa';
import {  AiOutlineProfile, AiOutlineMail} from 'react-icons/ai';

import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';


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
    <div className={classes.root}>
          <Grid item container xs={6} alignItems="flex-start" direction="column">
          <Grid item>
            <Tooltip title="LinkedIn" placement="right">
              <Button><a href="https://www.linkedin.com/in/martin-aleksandrov-322642195/"><FaLinkedinIn /></a></Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Github" placement="right">
              <Button><a href="https://github.com/maleex2"><FaGithub/></a></Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="A simple app using OpenWeatherMap API
to show current weather in a city.
The app is created with React, Material-UI
and GSAP animations." placement="right">
              <Button><FaGithub/></Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="CV" placement="right">
              <Button><a href="https://docs.google.com/uc?export=download&id=1120Ono5lmbKgC0WS2x6qA5gX608D0qLJ"><AiOutlineProfile/></a></Button>
            </Tooltip>
          </Grid>
        </Grid>
        </ul>
      </div>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className="mg-l">
              <Typography>
                A simple app using OpenWeatherMap API <br></br>
                to show current weather in a city. <br></br>
                The app is created with React, Material-UI <br></br>and GSAP animations.
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
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
<div>
      </ul>
    </footer>
  </>
  );
}



export default App;
