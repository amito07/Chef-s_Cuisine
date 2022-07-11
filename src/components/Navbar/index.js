import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <Nav>
        <NavLink to='/'>Chef's Cuisine</NavLink>
        <NavIcon onClick={toggle}>
            <p>Menu</p>
            <Bars/>
        </NavIcon>
    </Nav>
  )
}

export default Navbar