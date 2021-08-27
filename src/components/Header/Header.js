/* eslint-disable no-tabs */
import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import logo1 from '../../logo1.png'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>
			Change Password
    </NavLink>
    <NavLink to='/sign-out' className='nav-link'>
			Sign Out
    </NavLink>
    <NavLink to='/purchases' className='nav-link'>
			My Purchases
    </NavLink>
    <NavLink to='/cart' className='nav-link'>My Cart</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
    {/* <NavLink to='/cinebuster-movies' className='nav-link'>Movies</NavLink> */}
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/movies' className='nav-link'>Home</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='dark' variant='dark' expand='md'>
    <Navbar.Brand>
      <img src={logo1} alt="Logo" />
      <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>Cinebuster</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
