import React from 'react'

import fourimg from '../tvpAssets/Group314.png'
export default function Newsletter() {
    return (
        <>
            <div className="container-fluid newsletter">
                <div className="row ">
                    <div className="col ">
                        <img className='fourimg' src={fourimg} />
                    </div>
                    <div className="col my-5 newsDesc">
                        <h2>Subscribe to Get update of every New Offers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing malesuada nunc consequat fusce cursus mauris. </p>

                        <div className="row">
                            <div className="col">
                                <form action="">
                                    <input type="text" placeholder="Email address" name="mail" required  className='newsform my-3'/>
                                    <br></br>
                                    <input type="submit" value="Subscribe" className='newsbtn' />
                                </form>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}
