import React from "react";
import Container from "react-bootstrap/Container";
import "../App.css";

const HomePage = () => {
  return (
    <>
      <div className="cover-background">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container className="cover-container">
          <h1 className="cover-headline">Gather</h1>
          <p className="cover-sub-headline">~ where classmates connect ~</p>
        </Container>
      </div> 
    </>
  );
};

export default HomePage;
