import React from 'react'
import footerlogo from '../tvpAssets/footerlogo.png'
import fblogo from '../tvpAssets/facebooklogo.png'
import instalogo from '../tvpAssets/instagramlogo.png'
import twitterlogo from '../tvpAssets/twitterlogo.png'


export default function Footer() {
    return (
        <>
            <div className="container-fluid footer">
                <div className="container py-3">
                    <div className="row gx-3">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img className='footerlogo' src={footerlogo} />
                                    <p className='ftrDesc py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, tenetur.</p>
                                </div>
                            </div>
                            <div className="row px-5">
                                <div className="col-3"><img className='socialicons' src={fblogo} /></div>
                                <div className="col-3"><img className='socialicons' src={instalogo} /></div>
                                <div className="col"><img className='socialicons' src={twitterlogo} /></div>
                            </div>

                        </div>
                        <div className="col ftr-menu">
                            <h2>Locations</h2>
                            <li>Ambattur</li>
                            <li>Avadi</li>
                            <li>Thirumullaivoyal</li>
                            <li>Poompozilnagar</li>
                            <li>Mugapair</li>








                        </div>
                        <div className="col ftr-menu">
                            <h2>Links</h2>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                        </div>
                        <div className="col ftr-menu">
                            <h2>Company</h2>
                            <li>great</li>
                            <li>helooo</li>
                            <li>helooo</li>
                            <li>helooo</li>
                        </div>
                    </div>

                    <div className="row  pt-5">
                        <div className="col">
                            <p className='copyright'>Copyright © 2022 <span>TVP</span>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
