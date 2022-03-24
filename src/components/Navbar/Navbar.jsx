import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri'
import './Navbar.css';
import { images } from '../../constants';

const Menu = () => (
    <>
        <p>
            <a href = '/'>Home</a>
        </p>
        <p>
            <a href = '/about'>About Us</a>
        </p>
        <p>
            <a href = '/works'>Our Works</a>
        </p>
        <p>
            <a href = '#features'>Case Studies</a>
        </p>
        <p>
            <a href = '#blog'>Library</a>
        </p>
    </>
)

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className="app__navbar-links">
            <div className="app__navbar-links_logo">
                <img src={images.logo} alt="logo" width={122} height = {48}/>
            </div>
            <div className="app__navbar-links_container">
                <Menu />
            </div>
        </div>
        <div className = 'app__navbar-sign'>
            <button type = 'button'>Donate Now</button>
        </div>

        <div className="app__navbar-menu">
            {toggle?
                <RiCloseLine color = '#000' size = {27} onClick = {() => setToggle(false)}  /> :
                <GiHamburgerMenu color='#000' size={27} onClick = {() =>  setToggle(true)} />
            }

            {toggle && (
                <div className='app__navbar-menu_container scale-up-center'>
                    <div className="app__navbar-menu_container-links">
                        <Menu />
                    </div>
                    <div className="app__navbar-menu_container-sign">
                        <button type = 'button'>Donate Now</button>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar