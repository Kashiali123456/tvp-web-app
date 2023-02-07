import React from 'react'
import '../App.css';


import TVPtext from '../tvpAssets/TVPtext.png';
import TvpLogoIcon from '../tvpAssets/TvpLogoIcon.png';
import accIcon from '../tvpAssets/accIcon.png';
import bucketIcon from '../tvpAssets/bucketIcon.png';
import Logoi from '../tvpAssets/Logoi.png';

import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
   <section>
   <nav className="navbar navbar-light bg-light fixed-top custom-nav">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">

          <div className="offcanvas-header">
            <img src={Logoi} />
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">

            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">True Value Product</h5>

            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Favourites</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Orders & Reordering</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Addresses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Vouchers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Help Center</a>
              </li>
            </ul>
            {/* <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form> */}
          </div>

          <div className="offcanvas-footer">

            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

              <li className="nav-item">
                <a className="nav-link text-light" href="#">Settings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Terms and Conditions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Logout</a>
              </li>

            </ul>
          </div>

        </div>


        <div className="container">

          <div className="row">

            <div className="col-2">
              <img src={TvpLogoIcon} height="50" />
              <img src={TVPtext} height="50" />
            </div>

            <div className="col-8">
              <ul className="pd-10">
                <li className="myli"> <NavLink to="/Home" className="menu-item">Home</NavLink></li>
                {/* <li className="myli"><a href="#" className="menu-item">HOME</a></li> */}
                <li className="myli"><NavLink to="/Order" className="menu-item">Order now</NavLink></li>
                <li className="myli"><a href="#" className="menu-item">Contact US</a></li>
                <li className="myli"><a href="#" className="menu-item">BECOME A VENDOR/RIDER</a></li>
              </ul>


            </div>

            <div className="col-2 menu-icon-right">
              <ul className="pd-10">
                <li className="myli"> <NavLink to="/Login"><img src={accIcon} /></NavLink></li>
                <li className="myli"><a href=""><img src={bucketIcon} /></a></li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </nav>
    </section>

  )
}
