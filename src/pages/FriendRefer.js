import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from '../components/Slider'

const FriendRefer = () => {
  return (
    <div className='container'>
    <div className='pt-4 pb-4'>
       UI/UX {">"} Refer&Earn {">"} Friend Referred
    </div>
    <div className='d-flex justify-content-between align-items-center'>
      <div>
      <span className='title'>Your Referral Code</span>        
       <div className='box d-flex justify-content-center align-items-center'>
       <span className='code'>EDCH54</span>
       </div>
      </div>
      <div className='wallet-box d-flex flex-column justify-content-center p-3'>
       <span className='title'>Wallet Balance</span>
       <span className='payment'>₹ 500</span>
      </div>
    </div>
    <div className='slider-section pt-5 pb-4'>
      <h3 className='slider-section-title mb-4'>Friends who enrolled<span className='grey'>(3)</span></h3>
      <div className="slider">
      <Slider/>
      </div>
  </div>
  <div className='pt-5'>
    <NavLink href='/'>Terms & Conditions</NavLink>
  </div>
  </div>
  )
}

export default FriendRefer