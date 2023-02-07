import React, { Component } from "react";
import Slider from "react-slick";

import macD from '../tvpAssets/McDonald.png';
import starbucks from '../tvpAssets/Starbucks.png';
import Subway from '../tvpAssets/Subway.png';
import Pizzahut from '../tvpAssets/Pizza-Hut.png';
import Baskin from '../tvpAssets/Baskin.png';
import KFC from '../tvpAssets/KFC.png';
import dunkin from '../tvpAssets/dunkin.png';
import domino from '../tvpAssets/domino.png';
import Burgerking from '../tvpAssets/Burger-King.png';

export default class AutoPlay extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
          <img src={macD} />
          </div>
          <div>
          <img src={starbucks} />
          </div>
          <div>
          <img src={Subway} />
          </div>
          <div>
          <img src={Pizzahut} />
          </div>
          <div>
          <img src={Baskin} />
          </div>
          <div>
          <img src={KFC} />
          </div>
          <div>
          <img src={Burgerking} />
          </div>
          <div>
          <img src={Baskin} />
          </div>
          <div>
          <img src={dunkin} />
          </div>
          <div>
          <img src={domino} />
          </div>
        </Slider>
      </div>
    );
  }
}
