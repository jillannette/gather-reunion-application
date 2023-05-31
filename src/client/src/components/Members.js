import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// import fetchData from '../features/apiData';

// const Members members = [
//     {
//       "email": "lpatton@gmail.com",
//       "password": "lpatton4ever",
//       "nameAtGraduation": "Lorinda Patton",
//       "currentName": "Lorinda Patton-Oswald",
//       "image_url": "https://www.designbolts.com/wp-content/uploads/2019/02/beautiful-girl-face-free-stock-photo-1.jpg",
//       "bio": "I was really shy in high school and I still am.  Look forward to trying to attend a reunion soon"
//     }
//   ];

  const MembersPage = () => {
    return (
      <>
    <div className='join-background'>
    <div className='members'>
      <br></br>
      
    <div>
    <div style={{float: 'right'}}>
    <Button variant='light' size='lg' className='add-memory-button'>Edit / Delete My Info</Button>
    </div>  
    <h1 className="center-headline">Members</h1>
    </div>


   
    
      <br></br>
      <br></br>
     
      </div>
     

    <Container>
      <Col>
      <Row>
    <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={""}/>
     <Card.Body>
     <Card.Title>Name At Graduation</Card.Title>
     <ListGroup className="list-group-flush">
         <ListGroup.Item>currentName</ListGroup.Item>
         <ListGroup.Item>City, State</ListGroup.Item>
        
     </ListGroup>
     <Button variant="warning" href='/bio'>What I've Been Up To</Button>
    
    
     </Card.Body>
     </Card>
</Row>
</Col>

    </Container>
    </div>
    </>
      )

  // }

      
  // const [members, setMembers] = useState([]);
  // const membersPerRow = 4;

  // const getMemberData = async () => {
  }
  //   try {
  //     await fetchData('/members')
  //     .getMembers(numOfMembers)
  //     .then((data) => {
  //       setMembers(data.json);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const getColumnsForPage = () => {
  //   let items = members.map((member) => {

  //     return (
  //       <>
  //       <h1 className="center-headline">Members</h1>
  //       <Col>
       
  //   </Col>
  //   </>
   
  //   );  
  //     })
  //     return items;
  //   };

  //   useEffect(() => {
  //     getMemberData();
  //   })


 

export default MembersPage;