import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

export default function Navbar() {
  return <>
  <Nav>
    <div className='brand'>
        <div className='container'>
        <img src={logo} alt="" />
        Trevelo
        </div>
        <div className="toggle"></div>
    </div>
    <ul>
      <li><a href='#home'>Home<</a></li>
      <li><a href='#sercices'>Services<</a></li>
      <li><a href='#recommend'>recommend<</a></li>
      <li><a href='#testimonial'>Testimonials<</a></li>
    </ul>
  </Nav>
  </>;
}
const Nav = styled.nav'';