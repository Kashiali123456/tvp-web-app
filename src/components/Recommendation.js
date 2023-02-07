import React from 'react'

import burger from '../tvpAssets/burgeritem1.png'
import foodcart from '../tvpAssets/foodboxCart.png'
import AddonModal from './AddonModal'


const Recommendation = () => {




    return (
        <>
           
            <section>
                <div className="container-fluid REC">

                    <div className="row fooditemrow">
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="foodbox">
                                <img className='foodboximg' src={burger} />
                                <h3> Burger Theif </h3>

                                <p>Lorem ipsum dolor, sit amet consectetur il copti,</p>

                                <div className="row CartOrder">
                                    <div className="col-4">
                                        <img className='foodcartbox' src={foodcart} />
                                    </div>
                                    <div className="col-8">
                                        <AddonModal />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="foodbox">
                                <img className='foodboximg' src={burger} />
                                <h3>Burger Theif</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur il copti,</p>

                                <div className="row CartOrder">
                                    <div className="col-4">
                                        <img className='foodcartbox' src={foodcart} />
                                    </div>
                                    <div className="col-8">
                                        <AddonModal />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="foodbox">
                                <img className='foodboximg' src={burger} />
                                <h3>Burger Theif</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur il copti,</p>

                                <div className="row CartOrder">
                                    <div className="col-4">
                                        <img className='foodcartbox' src={foodcart} />
                                    </div>
                                    <div className="col-8">
                                        <AddonModal />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="foodbox">
                                <img className='foodboximg' src={burger} />
                                <h3>Burger Theif</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur il copti,</p>

                                <div className="row CartOrder">
                                    <div className="col-4">
                                        <img className='foodcartbox' src={foodcart} />
                                    </div>
                                    <div className="col-8">
                                        <AddonModal />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="foodbox">
                                <img className='foodboximg' src={burger} />
                                <h3>Burger Theif</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur il copti,</p>

                                <div className="row CartOrder">
                                    <div className="col-4">
                                        <img className='foodcartbox' src={foodcart} />
                                    </div>
                                    <div className="col-8">
                                        <AddonModal />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Recommendation;