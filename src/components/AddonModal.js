import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import burger from '../tvpAssets/burgeritem1.png'
import addburger from '../tvpAssets/addon1.png'




function AddonModal() {
    const [lgShow, setLgShow] = useState(false);

    const [count, setCount] = useState(1);
    const incrementCount = () => {
        // Update state with incremented value
        setCount(count + 1);
    };
    const decreaseCount = () => {
        // Update state with decreament  value
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <button onClick={() => setLgShow(true)} className='boxOrder'>Order Now</button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="popFoodDesc">


                                <img className='foodboximg' src={burger} />
                                <h3>Burger Theif</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur il copti,</p>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="plusminusdiv">
                                            <button onClick={decreaseCount} className="plusMinus">-</button>
                                            <p className='itemcount'> {count} </p>
                                            <button onClick={incrementCount} className="plusMinus">+</button>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <button className='modalATC'>Add to Cart</button>
                                        </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="addons">
                                <h3>Add Ons</h3>
                                <div className="row">
                                    <div className="col-2"><img className='addonimg' src={addburger} /></div>
                                    <div className="col-7">
                                        <h4>Mix Salaad</h4>
                                        <h5>$ 2</h5>
                                    </div>
                                    <div className="col-3">
                                        <div className="plusminusdiv">
                                            <button onClick={decreaseCount} className="plusMinus">-</button>
                                            <p className='itemcount'> {count} </p>
                                            <button onClick={incrementCount} className="plusMinus">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2"><img className='addonimg' src={addburger} /></div>
                                    <div className="col-7">
                                        <h4>Mix Salaad</h4>
                                        <h5>$ 2</h5>
                                    </div>
                                    <div className="col-3">
                                        <div className="plusminusdiv">
                                            <button onClick={decreaseCount} className="plusMinus">-</button>
                                            <p className='itemcount'> {count} </p>
                                            <button onClick={incrementCount} className="plusMinus">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2"><img className='addonimg' src={addburger} /></div>
                                    <div className="col-7">
                                        <h4>Mix Salaad</h4>
                                        <h5>$ 2</h5>
                                    </div>
                                    <div className="col-3">
                                        <div className="plusminusdiv">
                                            <button onClick={decreaseCount} className="plusMinus">-</button>
                                            <p className='itemcount'> {count} </p>
                                            <button onClick={incrementCount} className="plusMinus">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2"><img className='addonimg' src={addburger} /></div>
                                    <div className="col-7">
                                        <h4>Mix Salaad</h4>
                                        <h5>$ 2</h5>
                                    </div>
                                    <div className="col-3">
                                        <div className="plusminusdiv">
                                            <button onClick={decreaseCount} className="plusMinus">-</button>
                                            <p className='itemcount'> {count} </p>
                                            <button onClick={incrementCount} className="plusMinus">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2"><img className='addonimg' src={addburger} /></div>
                                    <div className="col-7">
                                        <h4>Mix Salaad</h4>
                                        <h5>$ 2</h5>
                                    </div>
                                    <div className="col-3">
                                        <div className="plusminusdiv">
                                            <button onClick={decreaseCount} className="plusMinus">-</button>
                                            <p className='itemcount'> {count} </p>
                                            <button onClick={incrementCount} className="plusMinus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AddonModal;