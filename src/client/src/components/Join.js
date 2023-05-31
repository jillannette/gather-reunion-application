// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';


// const Join = (props) => {

//   // const navigate = useNavigate();
  
//   // const [member, setMember] = useState({
//   //   email: '',
//   //   password: '',
//   //   nameAtGraduation: '',
//   //   currentName: '',
//   //   image_url: '',
//   //   bio: '',
//   // })

//   // const handleChange = (e) => {
//   //   setMember({ ...member, [{
//   //     e.target.e.target]})


//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [nameAtGraduation, setNameAtGraduation] = useState('');
//   // const [currentName, setCurrentName] = useState('');
//   // const [image_url, setImage_url] = useState('');
//   // const [bio, setBio] = useState('');
//   // const [members, setMembers] = useState(['']);




    
  



    
//   return (
//     <>
//     <div className='join-background'>
//     <div>
//       <br></br>
//     <h1 className="center-headline">Join Us!</h1>
//     </div>
//       <br></br>
//       <br></br>
//     <Container className='join-border'>
//       <Form className="form">
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Your Email address</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Enter email" 
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>
  
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Create a password</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Label>Your name when you graduated</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Sally Norton"
//             value={nameAtGraduation}
//             onChange={(e) => setNameAtGraduation(e.target.value)} />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Label>Your current name</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Sally Edwards"
//             value={currentName}
//             onChange={(e) => setCurrentName(e.target.value)} />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicImage">
//           <Form.Label>Url for profile picture</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="https://pathtophoto.jpg"
//             value={image_url}
//             onChange={(e) => setImage_url(e.target.value)} />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicTextArea">
//           <Form.Label>Tell others what you've been up to</Form.Label>
//           <Form.Control
//             as="textarea" 
//             rows={3} 
//             type="text" 
//             placeholder="After high school, I...."
//             value={bio} 
//             onChange={(e) => setBio(e.target.value)}/>
//         </Form.Group>

//         <Form.Group className="mb-3">
//         <Button onClick={() => (setMembers([...members, newMember.data]))}
//         variant="warning" type="submit" >
//           Submit
//         </Button>

//         </Form.Group>
//         </Form>
//         </Container>
//        </div>    
//        </>
//   );
// };

  
//   export default Join;