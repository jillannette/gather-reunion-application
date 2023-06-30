import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ loggedInMember, handleLogout }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    handleLogout();
    navigate("/");
  };
  return (
    <div>
      <Navbar className="nav" bg="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="me-auto align-items-center">
          <Nav.Link href="/">Home</Nav.Link>
          {loggedInMember ? (
            <Nav.Link href="profile">Profile</Nav.Link>
          ) : (
            <>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="join">Join</Nav.Link>
            </>
          )}

          <Nav.Link href="members">Class Members</Nav.Link>
          <Nav.Link href="memories">Memories</Nav.Link>
          <Nav.Link href="reunions">Reunions</Nav.Link>
          <Nav.Link href="nextReunion">2026 Reunion</Nav.Link>
          {loggedInMember && (
            <span id="logout" className="nav-link" onClick={handleClick}>
              Logout
            </span>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
