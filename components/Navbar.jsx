import React from 'react'
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';
import {Cart} from './';
import {useStateContext} from '../context/StateContext';
import logo from '../logo.png';
import Image from 'next/image'
const Navbar = () => {
  const{showCart,setShowCart,totalQuantities}=useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        {/* <Link href='/'>Justo Headphones</Link> */}
        <Link href='/'> <Image height={35}width={110} src={logo} alt='logo'/></Link>
      </p>
    
      <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
     {showCart && <Cart/>} 
    </div>
  )
}

export default Navbar