import React from 'react';
import '../App.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

  return (
    <div>
    <Navbar className="nav" bg="light" expand="lg" >
      <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="join">Join</Nav.Link>
          <Nav.Link href="members">Members</Nav.Link>
          <Nav.Link href="memories">Memories</Nav.Link>
          <Nav.Link href="reunions">Reunions</Nav.Link>
          </Nav>
     </Navbar>
    </div>
  )
}

export default NavBar;