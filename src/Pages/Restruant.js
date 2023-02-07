
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestruants } from '../redux/RestruantById';
const Cards = ({ restraunts }) => {
  return (
    <div
      className="col-lg-4 mb-3 d-flex align-items-stretch h-100" key={restraunts.id}>
      <div className="card">
        <div className="card-body">
          <p key={restraunts.id}>{restraunts.restraunt_name}</p>
        </div>
      </div>
    </div>
  )
}

function Restruant() {
  const dispatch = useDispatch( )
  const {  restraunts, loading, error } = useSelector((state) => state.restraunts)
  useEffect(() => {
    dispatch(getRestruants())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let content
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
    return Array.isArray(restraunts) ? restraunts.map((restraunt) => {
        // console.log('sami', restraunts.id);
          return (Cards({restraunt}))
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
export default Restruant