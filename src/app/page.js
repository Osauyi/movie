'use client' //
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Image from 'next/image'
import Home from "./movies"
import MovieDetails from './movieDetails';
import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Twitter from "../../assets/twitter.svg"
import Youtube from "../../assets/youtube.svg"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
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
    </BrowserRouter>
  )
}
