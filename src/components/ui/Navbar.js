import React from 'react'
import Button from '../reusable/Button'
import logo from '../../images/logos/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
        <a href='#'>
            <img src={logo} alt='Logo' />
        </a>
        <ul className='navbar'>
            <li>Index</li>
            <li>Candidates</li>
            <li>Employers</li>
            <li>Jobs</li>
            <li>Pages</li>
            <li>Blog</li>
        </ul>
        <div className='navbar_right'>
            <Button color='transparent'>
                <span>+</span>
                <span>Sign In</span>
            </Button>
            <Button color='#376bff' className='btn-round'>
                <span>+</span>
                <span>Post a Job</span>
            </Button>
        </div>
    </nav>
  )
}

export default Navbar