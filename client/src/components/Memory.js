import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import CreateComment from './CreateComment';

import {
  Container,
  Card,
  Row,
  Col,
  Button,
  ListGroup,
} from "react-bootstrap";

const Memory = ({ memory, loggedInMember }) => {

  const [showAddCommentBox, setShowAddCommentBox] = useState(false)
  return (
    <>
    <Container >
      <Card >
        <Row className="memory-card">
          <Col >
            <Card.Img
              className="memories-image"
              src={memory.image_url}
            />
          </Col>
          <Col >
          
            <Card.Body  >
              <Card.Title>{memory.subject}</Card.Title>
              <hr></hr>
              <Card.Text>
                {memory.member?.nameAtGraduation} remembers...{" "}
              </Card.Text>
              <ListGroup>
                <ListGroup.Item>{memory.text}</ListGroup.Item>
              </ListGroup>
              <br></br>
              {memory.comments.map((comment) => {
                return (
                <>
              <Card.Text key={comment._id}>{comment.nameAtGraduation} commented...{" "}</Card.Text>
              <ListGroup>
               
                  <ListGroup.Item>{comment.text}</ListGroup.Item>
               
              </ListGroup>
              </>
                )
                })}
              <br></br>
                        
              {!showAddCommentBox ? (
                 <Button onClick={() => setShowAddCommentBox(true)}variant="warning" >
                 Add Comments
               </Button>
              ) : (
                <CreateComment memoryId={memory._id} loggedInMember={loggedInMember} memberName={memory.member.nameAtGraduation}/>
              )
}
        
              
               
         
            </Card.Body>
            
          </Col>
          
        </Row>
       
   
       
       
      </Card>
    
    <br></br>
    <br></br>
     
     
    </Container>

    
  </>
  )
}

export default Memory