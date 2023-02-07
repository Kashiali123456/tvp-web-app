/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../redux/AddToCartSlice'

const Cards = ({ items, cart}) => {
  
 
  return (
    
    <div className="col-lg-4 mb-3 d-flex align-items-stretch h-100"  key={items}>
      <div className="card" style={{marginLeft:'40px', marginTop:'40px'}}>
        <div className="card-body">
          <img src="http://192.168.100.18:8000/storage/restraunts/deals/kMctgDgho8Hyjtsep9C4Nc06Xk52w20XveI5HbBL.png" style={{width:'240px', height:'240px'}} />
          <h2 className="card-text">{items.item.price}</h2>
          <h2 className="card-text">{items.item.time}</h2>
          <h2 className="card-text">{items.item.category}</h2>
          <h2 className="card-text">{items.item.deal_name}</h2>
          <h2 className="card-text">{items.item.description}</h2> 
          {/* <h2 className="card-text">{items.item.time}</h2> */}
          <h2 className="card-text">{items.item.item}</h2>
        </div>
      </div>
    </div>
  
    
  )
 
}


function AddToCart() {
  const dispatch = useDispatch()
  const { cart, loading, error } = useSelector((state) => state.cart)
  console.log('orderbyid', cart)
  useEffect(() => {
    dispatch(getCart())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  let content;
  if (loading === 'pending') {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  
  if (loading === 'fulfilled') {
    return Array.isArray(cart) ? cart.map((items) => {
        console.log('items', items)
      return (Cards({ items}))
     
    }) : null
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }
  return <div className="row">{content}</div>
}
export default AddToCart


