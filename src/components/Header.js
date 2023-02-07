import React from 'react'
import '../tvpAssets/Header.css';
import logo from '../tvpAssets/LoginPage/loginLogo.png'
import { NavLink } from 'react-router-dom';
import accIcon from '../tvpAssets/accIcon.png';
import bucketIcon from '../tvpAssets/bucketIcon.png';

export default function Header() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 logo">
              
              <img src={logo} />

            </div>
            <div className="col-md-2 DelPick">
              <div className="switch6">
                <label className="switch6-light">
                  <input type="checkbox" />
                  <span>
                    <span>Delivery</span>
                    <span>Pickup</span>
                  </span>
                  <a className="btn tglbtn"></a>
                </label>
              </div>
            </div>
            <div className="col-md-2 searchHeader">
              <form className="d-flex">

                <input className="form-control me-2" type="search" placeholder="&#xf002; Search" aria-label="Search" />
              </form>
            </div>

            <div className="col-md-4 pd-10" >
              <ul>
                <li className="myli"> <NavLink to="/Home" className="menu-item">Home</NavLink></li>
                <li className="myli"><NavLink to="/Order" className="menu-item">Order now</NavLink></li>
                <li className="myli"><a href="#" className="menu-item">BECOME A VENDOR/RIDER</a></li>
              </ul>

            </div>
            <div className="col-md-2 menu-icon-right">
              <ul className="pd-10">
                <li className="myli"><a href=""><img src={bucketIcon} /></a></li>
                <li className="myli"> <NavLink to="/Login"><img src={accIcon} /></NavLink></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
