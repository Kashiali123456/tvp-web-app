import React from 'react'
// import HeroSection from '../components/Herosection';
// import Nearby from '../components/Nearby';
// import Imagegallery from '../components/Imagegallery';
// import Categories from '../components/Categories';
// import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Items from './Items';
// import Restruant from './Restruant';

import Landinghome from '../components/LandingSection'


export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <Landinghome />
      <Items />
      {/* <Restruant /> */}
      <Footer />
    </>
  )
}
