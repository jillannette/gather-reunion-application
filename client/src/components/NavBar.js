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
            <Nav.Link href="profile" onClick={() => navigate("/profile")}>
              Profile
            </Nav.Link>
          ) : (
            <>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="join">Join</Nav.Link>
            </>
          )}

          <Nav.Link href="members" onClick={() => navigate("/members")}>
            Class Members
          </Nav.Link>
          <Nav.Link href="memories" onClick={() => navigate("/memories")}>
            Memories
          </Nav.Link>
          <Nav.Link href="reunions" onClick={() => navigate("/reunions")}>
            Reunions
          </Nav.Link>
          <Nav.Link
            href="nextReunions"
            onClick={() => navigate("nextReunions")}
          >
            NextReunion
          </Nav.Link>
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