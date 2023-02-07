import React from 'react'
import homepic2 from '../tvpAssets/homepic2.png'
import homepic1 from '../tvpAssets/homepic1.png'
import playstore from '../tvpAssets/playstore.png'
import appstore from '../tvpAssets/appstore.png'
import '../tvpAssets/css/landinghome.css';
import Recommendation from './Recommendation'
import chef from '../tvpAssets/chef.png'
import Nearby from '../components/Nearby';
export default function LandingSection() {

    return (
        <>
            <section>
                <div className="container-fluid LSC">
                    <div className="row hmrow">
                        <div className="col-md-6">
                            <img className='homepic2' src={homepic2} />
                        </div>
                        <div className="col-md-3">
                            <div className="descsection">
                                <h2>Best Food Delivery App</h2>
                                <p> Lorem ipsum dolor sit amet consectetur. Urna tortor eu lorem est at id diam faucibus. Lorem ipsum dolor sit amet consectetur. Urna tortor eu lorem est at id diam faucibus. </p>
                            </div>
                            <div className="descsection-btn">
                                <h4>Download Now:</h4>
                                <div className="row">
                                    <div className="col">
                                        <img src={playstore} />
                                    </div>
                                    <div className="col">
                                        <img src={appstore} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <img className='homepic1' src={homepic1} />
                        </div>
                    </div>
                </div>
            </section>

            <Nearby />
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 Rhec">
                        <h2>Recommendation</h2>
                        <hr className="solid" />
                    </div>
                    <div className="col-sm-8 hea">
                        <img src={chef} />

                    </div>
                </div>
            </div>


            <Recommendation />
            <Recommendation />

        </>
    )
}


