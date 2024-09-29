import React from 'react'
import { Link } from 'react-router-dom'
import MeubelLogos from '../../assets/MeubelLogos.svg'
import cart from '../../assets/cart.svg'
import love from '../../assets/love.svg'
import profileimg from '../../assets/profileimg.svg'
import search from '../../assets/search.svg'
import { Image, Video, Transformation } from 'cloudinary-react';

const Nav = () => {
  return (

    

  <nav>
  <ol className=' flex  space-x-80 text-center items-center text-lg pb-4 pt-4 pr-32  border border-white bg-white' >
  
    <li className='flex absolute font-monterat font-bold text-3xl'>
      <img src={MeubelLogos} alt="MeubelLogos" />
      <h2 className='pl-4'>Furniro</h2>
    </li>
  
    <li className='flex gap-3'>
  
    <Link className='' to="/home">Home</Link>
      {/* <h3>About</h3>
      <h3>Contact</h3> */}
      <Link className='' to="/shop">Shop</Link>
      <Link className='' to="/contact">Contact</Link>
      <Link className='' to="/blog">Blog</Link>
  
    </li>
    <li className='flex gap-9'>
      <img src={profileimg} alt="" />
      <img src={search} alt="" />
      <img src={love} alt="" />
      <img src={cart} alt="" />
  
    </li>
  </ol>
  
  </nav>
  
  )
}

export default Nav