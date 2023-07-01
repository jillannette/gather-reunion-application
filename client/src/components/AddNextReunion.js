//FOR FUTURE USE 
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Form, Button  } from "react-bootstrap";
// import axios from "axios";

// const CreateNextReunion = ({ loggedInMember }) => {

//   const navigate = useNavigate();

//   const [nextReunion, setNextReunion] = useState({
//     cover_image_url: "",
//     date: '',
//     location: '',
//     map: '',
//     description: '',
//     registration: '',
    
//   });

//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     console.log("e.target.name", e.target.name);
//     setNextReunion({
//       ...nextReunion,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCancel = () => {
//     navigate('/upcomingReunions')
//   }

//   async function createNextReunion(e) {
 
//     e.preventDefault();
//     console.log(nextReunion);
//     const config = {
//       headers: {
//         Authorization: `Bearer ${loggedInMember.token}`,
//       },
//     };
//     axios
//       .post(`${BASE_URL}/api/createNextReunion", nextReunion, config)
//       .then((response) => {
//         console.log(response.data);
       
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setError(error);
//       })
      
//   }

//   if (error) return "error";

//   return (
//     <>
//       <div className="join-background">
//         <div>
//           <br></br>
//           <h1 className="center-headline">Add A Reunion</h1>
//         </div>
//         <div>
//         <Container className="login-border">
//           <Form className="form" onSubmit={createNextReunion}>
//             <Form.Group className="mb-3" type="input" controlId="formBasicImage">
//               <Form.Label>Add reunion cover image </Form.Label>
//               <Form.Control
//                 type='input'
//                 placeholder="https://pathtophoto.jpg"
//                 name="cover_image_url"
//                 value={nextReunion.cover_image_url}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" type="input" controlId="formBasicImage">
//               <Form.Label>Add reunion date </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="MM-DD-YYYY"
//                 name="date"
//                 value={nextReunion.date}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" type="input" controlId="formBasicImage">
//               <Form.Label>Add reunion location </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City, State"
//                 name="location"
//                 value={nextReunion.location}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" type="input" controlId="formBasicImage">
//               <Form.Label>Add reunion map </Form.Label>
//               <Form.Control
//                 type="iframe"
//                 placeholder="Google Maps code"
//                 name="map"
//                 value={nextReunion.map}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" type="input" controlId="formBasicTextArea">
//               <Form.Label>Add a description and highlights of the reunion here</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={5}
//                 type="text"
//                 placeholder="This reunion was..."
//                 name="description"
//                 value={nextReunion.description}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Button variant="warning" type="submit">
//                 Submit
//               </Button>
//                 &nbsp;&nbsp;
              
//               <Button onClick={handleCancel} variant="warning" type="button" > Cancel</Button>
//             </Form.Group>
//           </Form>
//         </Container>
//       </div>
//       </div>
//     </>
//   );
// };

// export default CreateNextReunion;