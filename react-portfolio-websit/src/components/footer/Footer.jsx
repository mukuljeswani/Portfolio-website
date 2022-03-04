import React from 'react'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (

    <footer>
      <a href="" className="footer__logo"></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/mukul.jeswani.1/" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/mukul_jeswani/"target="_blank"><FiInstagram /></a>
        <a href="https://twitter.com/jeswani_mukul" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mukul Jeswani</small>
      </div>
    </footer>
  )
}


export default Footer