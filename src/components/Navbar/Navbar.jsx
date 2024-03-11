import React from 'react'
import '../Navbar/Navbar.css'
import chat from './chat.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
        <a id="top" href={'#home'} className="nav-logo">Studios Now</a>
        <ul className="nav-menu">
            <li className="nav-item">
                <a id="portfoliolink" href={'#portfolio'} className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
                <a id="aboutlink" href={'#about'} className="nav-link" >About Us</a>
            </li>
        </ul>
        <div className="right-element">
            <div className="contactlinkcontainer">
                <a href="https://bit.ly/studiosnow_contact"  target="_blank" className="contactlink">Contact</a><img src={chat} className="chat"/>
            </div>
        </div>
        
        
        <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </nav>
  )
}

export default Navbar