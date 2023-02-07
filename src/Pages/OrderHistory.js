/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderHistory } from '../redux/OrderHistorySlice'

const Cards = ({ item }) => {
  return (
    
    <div className="col-lg-4 mb-3 d-flex align-items-stretch h-100" key={item.id}>
      <div className="card">
        <div className="card-body">
        {/* <img className="card-text" src  ="http://192.168.100.18:8000/storage/restraunts/deals/wLnHu7OAOTesWkKEBoPiFJdqkb15768tWUIoxrf5.jpg"   /> */}
          <p className="card-text" >{item.restraunt}</p>
          <p className="card-text" >{item.order_id}</p>
          

        </div>
      </div>
    </div>
  )
}
function OrderHistory() {
  const dispatch = useDispatch()
  
  const { orderhistory, loading, error  } = useSelector((state) => state.orderhistory)
//   console.log('orderhistory', orderhistory)
  useEffect(() => {
    dispatch(getOrderHistory())
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
    return Array.isArray(orderhistory) ? orderhistory.map((item) => {
        // console.log('sami', item.id);
          return (Cards({item}))
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
export default  OrderHistory