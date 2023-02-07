import React from 'react'

import subtract from '../tvpAssets/Subtract.png';

import ig1 from '../tvpAssets/ImageGallery/IG1.png';
import ig2 from '../tvpAssets/ImageGallery/IG3.png';
import ig3 from '../tvpAssets/ImageGallery/IG4.png';
import ig4 from '../tvpAssets/ImageGallery/IG6.png';
import ig5 from '../tvpAssets/ImageGallery/IG8.png';
import ig8 from '../tvpAssets/ImageGallery/IG9.png';
import ig9 from '../tvpAssets/ImageGallery/IG10.png';

export default function imagegallery() {
    return (
        <>
            <div className="container-fluid subtract">
                <img src={subtract} />
            </div>

            <div className="container">
                <div className="row gx-5">
                    <div className="col-3"><img className='VerImg' src={ig1} /></div>
                    <div className="col-3"><img className='VerImg' src={ig2} /></div>
                    <div className="col-3"><img className='VerImg' src={ig3} /></div>
                    <div className="col-3"><img className='VerImg' src={ig4} /></div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row gx-5">
                    <div className="col"><img className='VerImg' src={ig8} /></div>
                    <div className="col"><img className='VerImg' src={ig9} /></div>
                </div>
            </div>

            <div className="container">
                <div className="row gx-5">
                    <div className="col-3"><img className='VerImg' src={ig5} /></div>
                    <div className="col-3"><img className='VerImg' src={ig2} /></div>
                    <div className="col-3"><img className='VerImg' src={ig3} /></div>
                    <div className="col-3"><img className='VerImg' src={ig4} /></div>
                </div>
            </div>

        </>
    )
}
