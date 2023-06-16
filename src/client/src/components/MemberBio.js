import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';


const MemberBio = ({loggedInMember}) => {

  const params = useParams();
  const [memberBio, setMemberBio] = useState({
    image_url: '',
    nameAtGraduation: '',
    currentName: '',
    email: '',
    bio: '',

  });
  
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedInMember) {
      getMember();
    }
  }, [loggedInMember]);

  async function getMember() {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedInMember.token}`,
      },
    };
    await axios
      .get(`http://localhost:5000/api/members/${params.id}`, config)
      .then((response) => {
        console.log("memberBio", response.data);
        const memberBio = response.data;
        
        setMemberBio(memberBio);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }
  
  if (error) return "error";
  

  return (
    <>
    <Link to='/members'><Button variant="primary" className='back-button' >Back to Members</Button></Link>
    <Container>
      <Row>
        <Col className='member-bio-col'>
    <Card key={memberBio._id} style={{ width: '40rem'}}>
 
    
    <Card.Img variant="top" src={memberBio.image_url}/>
   
    <Card.Body className='member-card-body'>
    
    <Card.Title>{memberBio.currentName}</Card.Title>
   
        <Card.Text>({memberBio.nameAtGraduation})</Card.Text>
        <Card.Text>{memberBio.email}</Card.Text>
    <Card.Text>{memberBio.bio}</Card.Text>
    
    {/* <Button variant="primary" href={member.memories}>Memories</Button>
    <Button variant="primary" href={member.comments}>Comments</Button> */}
   
    
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default MemberBio;