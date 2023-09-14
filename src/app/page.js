'use client' //
import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Image from 'next/image'
import Logo from "../../public/assets/Logo.svg"
import Imdb from "../../public/assets/imdb.svg"
import Favourite from "../../public/assets/Favorite.svg"
import Play from "../../public/assets/Play.svg"
import Search from "../../public/assets/Search.svg"
import Menu from "../../public/assets/Menu.svg"
// import MovieDetails from './moviedetails/page';
import Facebook from "../../public/assets/facebook.svg"
import Instagram from "../../public/assets/instagram.svg"
import Twitter from "../../public/assets/twitter.svg"
import Youtube from "../../public/assets/youtube.svg"
import Link from 'next/link';


export default function Home(){
     const [dataList, setDataList] = useState([])


 useEffect(() => {
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjZiNGE3YjlkYzVkNmY5ZDYwYjAxYjI5ZGZhNzlmZiIsInN1YiI6IjY1MDAyNzA1ZmZjOWRlMGVlMTc2ZDI1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xkMem8QYCmcA5WFK9LPuWWXXDGNlQKszFCw-AFTN1NA'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then((data) => {setDataList(data.results)} )
  .catch(err => console.error(err));
 
}, [])


  let MovieList = dataList.slice(0, 10)
  

  return (
    <div>
      <div className='topbox'>
         <div className='navBar'>
            <div className='head'>
               <Image src={Logo} alt="logo"/>
            </div>
            <div className='searchbox'>
               <input type="text" placeholder='What do you want to watch'></input>
               <Image className='Searchglass' src={Search} alt="Search"/>
            </div>
            <div className='signin'>
               <Image className='siginimg' src={Menu} alt="menu"/>
               <h2>sign in</h2>
            </div>
         </div>
         <div className='johnmovie'>
         <h1>John Wick 3 : Parabellum</h1>
         <div className='johnrating'><Image src={Imdb} alt="imbd"/>
          <div className='imdb'>9.8/10</div></div>
         
         <p>John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
         </div>
      

      </div>
    
    <div className='movie-box'>
       {MovieList.map((movie) => { 
          const srcs = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        return(
        <div className='everymovie' key={movie.id} data-testid="movie-card">
        <Link href={`/${movie.id}`}>
        <div className='movie-image'>
         
        <Image className='movieImage' loader={() => srcs} src = {srcs}  data-testid="movie-poster" alt='movie-poster' width={150} height={200}/>
        <Image className='favourite' src={Favourite}  alt="favorite"/>
        </div>
        </Link>
        <div className='movie-details'>
        <h2 data-testid="movie-release-date">{movie.release_date}</h2>
        <h3  data-testid="movie-title">{movie.title}</h3>
        </div>
        <div className='ratings'>
         <Image src={Imdb} alt="imbd"/>
          <div className='imdb'>{movie.vote_average}/10</div>
        
        </div>
        
        </div>
      )})}
    
    </div>

         <div className='footer '>
          <div className='socials'>
            <Image src={Facebook} alt="facebook logo"/>
            <Image src={Instagram} alt="Instagram logo"/>
            <Image src={Twitter} alt="Twitter logo"/>
            <Image src={Youtube} alt="Youtube logo"/>
          </div>
          <div className='help'>
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy & Policy</a>
            <a href="#">Press Room</a>
          </div>
          <p>© 2021 MovieBox by Adriana Eka Prayudha  </p>
      </div>
 

    </div>
  )
}
