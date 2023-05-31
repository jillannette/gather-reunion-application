import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


const Login = () => {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);

  // function validateLogin() {
  //   setError(null);

  //   if (email.length < 4 || password.length < 6) {
  //     setError('Invalid email or password');
  //     return;
  //   }

  //   fetchData('/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email, password })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.token) {
  //       localStorage.setItem('token', data.token);
  //       // history.push('/members');
  //     } else {
  //       setError('Invalid email or password');
  //     }
  //   })
  //   .catch(error => {
  //     setError('An unexpected error has occurred');
  //   })
  // }

  return (
    <>
    <div className='join-background'>
      
    <div>
  
    
    <h1 className="center-headline">Login</h1>
    </div>
      <br></br>
      <br></br>
    <Container className='login-border'>
    <Col>
    <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <br></br>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <br></br>
      
      <Form.Check type="checkbox" label="Log Out" />
    </Form.Group>
    
    <Button variant="warning" type="submit" href='/members'>
      Login
    </Button>
    </Form>
    </Col>
    </Container>
    </div>

    </>

    )  
}
 
export default Login;