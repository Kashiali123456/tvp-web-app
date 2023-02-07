import React from 'react'
import '../App.css';

import burger from '../tvpAssets/burger.png';
import Singlepaty from '../tvpAssets/Singlepaty.png';


export default function herosection() {
  return (
    <>

      <div className="container-fluid hero-section">
        <div className="row">
          <div className="col">
            <img className="burger  mx-auto d-block" src={burger} alt="" />
            <img className="burgertext mx-auto d-block" src={Singlepaty} alt="" />
          </div>
        </div>
      
      </div>
    </>
  )
}
