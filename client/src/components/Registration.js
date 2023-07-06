//FOR FUTURE USE 

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Button from "react-bootstrap/Button";
// // import Form from "react-bootstrap/Form";
// // import Container from "react-bootstrap/Container";
// // import axios from "axios";
// // import { BASE_URL} from '../App.js';

// // const Registration = ({ LoggedInMember }) => {
// //   const navigate = useNavigate();

// //   const [newRegistration, setNewRegistration] = useState({
// //     name: "",
// //     email: "",
// //     numberAttending: "",
// //     cost: "",
// //   });

// //   const [error, setError] = useState(null);

// //   const handleChange = (e) => {
// //     console.log("e.target.name", e.target.name);
// //     console.log("e.target.value", e.target.value);
// //     setNewRegistration({
// //       ...newRegistration,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   async function handleRegistration(e) {
// //     e.preventDefault();
// //     console.log(newRegistration);
// //     await axios
// //       .post(`${BASE_URL}/api/register`, newRegistration)
// //       .then((response) => {
// //         console.log(response.data);
// //         navigate("/nextReunion");
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data: ", error);
// //         setError(error);
// //       });
// //   }

// //   if (error) return "error";

// //   return (
// //     <>
// //       <div>
// //         <h1 className="center-headline">Registration Form</h1>
// //       </div>
// //       <br></br>
// //       <Container className="join-border">
// //         <br></br>
// //         <Form className="form" onSubmit={handleRegistration}>
// //           <Form.Group className="mb-3" controlId="formBasicName">
// //             <Form.Label>Your name </Form.Label>
// //             <Form.Control
// //               type="text"
// //               placeholder="Sally Jones"
// //               name="name"
// //               value={newRegistration.name}
// //               onChange={handleChange}
// //             />
// //           </Form.Group>

// //           <Form.Group className="mb-3" controlId="formBasicEmail">
// //             <Form.Label>Your email address</Form.Label>
// //             <Form.Control
// //               type="email"
// //               placeholder="sallyjones@gmail.com"
// //               name="email"
// //               value={newRegistration.email}
// //               onChange={handleChange}
// //             />
// //           </Form.Group>

// //           <Form.Group className="mb-3" controlId="formBasicNumberAttending">
// //             <Form.Label>Number Attending Reunion</Form.Label>
// //             <Form.Control
// //               type="text"
// //               placeholder="2"
// //               name="numberAttending"
// //               value={newRegistration.numberAttending}
// //               onChange={handleChange}
// //             />
// //           </Form.Group>

// //           <Form.Group className="mb-3" controlId="formBasicCost">
// //             <Form.Label>Total Amount Due @ $50 per person</Form.Label>
// //             <Form.Control
// //               type="number"
// //               placeholder="$100.00"
// //               name="cost"
// //               value={newRegistration.cost}
// //               onChange={handleChange}
// //             />
// //           </Form.Group>

// //           <Form.Group className="mb-3">
// //             <Button variant="warning" type="submit">
// //               Submit
// //             </Button>
// //           </Form.Group>
// //         </Form>
// //       </Container>
// //     </>
// //   );
// // };

// export default Registration;
