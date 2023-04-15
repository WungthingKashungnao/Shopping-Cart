import React from 'react'
import cart from '../assets/cart.png'
function Header(props) {  
  const handleShow = ()=>{
    props.setShow(!props.show)
  }
  return (
    <>
      <section className='header'>
        <div className='hcart' onClick={handleShow}>
            <img src={cart} alt="" />
            <span className='cart-count'>{props.size}</span>
        </div>
      </section>
    </>
  )
}

export default Header
