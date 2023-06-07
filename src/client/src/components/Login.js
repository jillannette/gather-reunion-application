import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import axios from "axios";

const Login = ({ setLoggedInMember }) => {
  const navigate = useNavigate();

  const [authMember, setAuthMember] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name);
    setAuthMember({
      ...authMember,
      [e.target.name]: e.target.value,
    });
  };

  async function login(e) {
    e.preventDefault();
    console.log(authMember);
    axios
      .post("http://localhost:5000/api/login", authMember)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "member",
          JSON.stringify({
            memberId: response.data.member._id,
            token: response.data.token,
          })
        );
        setLoggedInMember({
          memberId: response.data.member._id,
          token: response.data.token,
        });
        navigate("/members");
      })
      .catch((error) => {
        console.error("Error logging user in: ", error);
        setError(error);
      })
      .finally((loading) => {
        console.log("Loading data: ", loading);
      });
  }

  if (error) return "error";

  return (
    <>
      <div className="login-background">
        <div>
          <h1 className="center-headline">Login</h1>
        </div>
        <br></br>
          
        <Container className="login-border">
          <Form className='login-form-background'>
            <Form className="form" onSubmit={login}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <br></br>  
             
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={authMember.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <br></br>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={authMember.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <br></br>
                
                <Form.Check type="checkbox" label="Log Out" />
              </Form.Group>

              <Button variant="warning" type="submit">
                Log In
              </Button>
            </Form>
            </Form>
     
        </Container>
      </div>
    </>
  );
};

export default Login;
