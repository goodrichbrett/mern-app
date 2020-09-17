import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavBar = ({ user, handleLogout }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    
  return (
    <>
      {user ?
      <Navbar color="light" light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href=" ">Welcome, {user.name}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/users">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href=" " onClick={handleLogout}>Log Out</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
      :
      <Navbar color="light" light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/login">Log In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/users">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Sign Up</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
      }
    </>
  )
}

export default NavBar;
