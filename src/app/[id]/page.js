'use client' //
import React, { useState, useEffect } from 'react';

import Image from 'next/image'
import Logo from "../../../public/assets/Logo.svg"
import Upcoming from "../../../public/assets/Calendar.svg"
import Home from "../../../public/assets/Home.svg"
import Tv from "../../../public/assets/TV Show.svg"
import Play from "../../../public/assets/Play.svg"
import Logout from "../../../public/assets/Logout.svg"
import MOvie from "../../../public/assets/Movie Projector.svg"
import Imdb from "../../../public/assets/imdb.svg"





export default function MovieDetails({params}) {


    const [datas, setDatas] = useState([]);
     useEffect(() => {

fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=a26b4a7b9dc5d6f9d60b01b29dfa79ff`)
  .then(response => response.json())
  .then((data) => {setDatas(data)} )
  .catch(err => console.error(err));
}, [params.id])
    const srcd = `https://image.tmdb.org/t/p/w500/${datas.backdrop_path}`
    return (

        <div className="secondbox">
        <div className="sidebar">
          
             <Image src={Logo} alt="logo"/>
            <div className="home"> <Image src={Home} alt="home"/><h2>Home</h2> </div>
            <div className="movies"> <Image src={MOvie} alt="MOvie"/><h2>Movies</h2>  </div>
            <div className="tvSeries"> <Image src={Tv} alt="Tv"/><h2>TV Series</h2>  </div>
            <div className="upcoming"> <Image src={Upcoming} alt="calender"/><h2>Upcoming</h2>  </div>
            <div className="Logout">  <Image src={Logout} alt="Logout"/><h2>Logout</h2>  </div>
        </div>


        <div className="themovieDetails">
            <div className="imageBackground">
                <Image className="backimage" loader={() => srcd} src= {srcd} alt="backgroundposter"  width={900} height={400} unoptimized={true} />
            </div>
            <div className="Details">
            <h2>{datas.title}</h2>
             <div className='ratings'>
         <Image src={Imdb} alt="imbd"/>
          <div className='imdb'>{datas.vote_average}/10</div>
        </div>
            </div>
             <p>{datas.overview}</p>
            </div>
        </div>

        
      
    )
}