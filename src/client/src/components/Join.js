import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Join() {
 
  
    return (
      <>
      <div>
        <h1 className="center-headline">Create an Account </h1>
      </div>
      <Container>
      <Form className="Login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Create a password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name when you graduated?</Form.Label>
          <Form.Control type="name" placeholder="Sally Norton" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Current name?</Form.Label>
          <Form.Control type="name" placeholder="Sally Edwards" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Add your profile image url</Form.Label>
          <Form.Control type="string" placeholder="Your profile image url" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Button variant="primary" type="submit">
          Submit
        </Button>

        </Form.Group>
     
     
        
        
        
        
       
       
      </Form>
      </Container>
      </>
     
    );
  }

  
  export default Join;