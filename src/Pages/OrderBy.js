/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../redux/OrderById'

const Cards = ({ item, dealItemsList }) => {

  return (

    <div className="col-lg-4 mb-3 d-flex align-items-stretch h-100" key={item.id}>
      <div className="card" style={{ marginLeft: '40px', marginTop: '40px' }}>
        <div className="card-body">
          <img src="http://192.168.100.18:8000/storage/restraunts/deals/wLnHu7OAOTesWkKEBoPiFJdqkb15768tWUIoxrf5.jpg" style={{ width: '215px', marginTop: '40px', marginLeft: '39px', height: '215px' }} />
          <p className="card-text" style={{ textAlign: 'center' }} >{item.price}</p>
          <p className="card-text" style={{ textAlign: 'center' }}>{item.item}</p>
          <p className="card-text" style={{ textAlign: 'center' }}>{item.time}</p>
          <p className="card-text" style={{ textAlign: 'center' }}>{item.category}</p>
          <p className="card-text" style={{ textAlign: 'center' }}>{item.deal_name}</p>
          <p className="card-text" style={{ textAlign: 'center' }}>{item.description}</p>
         
            {Array.isArray(dealItemsList) ? dealItemsList.map((item) => {
              console.log( 'sami', dealItemsList);
              <p className="card-text"style={{ textAlign: 'center' }}>{item.addon[item.item].addon}</p>
            }) : null}
          </div>
        </div>
      </div>
   



  )
}

function OrderBy() {
  const dispatch = useDispatch()
  const { dealItemsList, orderbyid, loading, error } = useSelector((state) => state.orderbyid)
  console.log('orderbyid', dealItemsList)
  useEffect(() => {
    dispatch(getOrderById())
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
    // eslint-disable-next-line no-lone-blocks
    return Array.isArray(orderbyid) ? orderbyid.map((item) => {

      // console.log('sami', item.addon[0][dealItemsList[0]]);
      return (Cards({ item }))
      // return <Cards key={index} response={item.restraunt_name} />;
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
export default OrderBy


