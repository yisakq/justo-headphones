import React from 'react'
import {AiFillInstagram,AiFillTwitterCircle,AiOutlineLinkedin,AiOutlineTwitter}from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
       <p>2024 Justo Headphones All rights reserved</p>
       <p className='icons' >
       <a href="https://linkedin.com/in/yes7"target="_blank">
    <AiOutlineLinkedin />
       </a>
       </p>
    </div>
  )
}

export default Footer