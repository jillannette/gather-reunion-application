import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ReunionPhotoGallery = () => {

  

  return (
  <>
  <div>
    <h1 className="center-headline">2021 aka reunion.year</h1>
    <h2 className="center-headline">Will need a model for this, with properties of image, caption, year, </h2>
   

    <Button variant="primary" href="addGallery" >Add A Photo!</Button>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://www.greeleytribune.com/wp-content/uploads/2021/05/GRE-L-UniversityHSGraduation-AM0255.jpg?w=300/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.greeleytribune.com/wp-content/uploads/2021/05/GRE-L-UniversityHSGraduation-AM0255.jpg?w=300/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.greeleytribune.com/wp-content/uploads/2021/05/GRE-L-UniversityHSGraduation-AM0255.jpg?w=300/171x180" rounded />
        </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
        <Col xs={6} md={4}>
          <Image src="https://www.greeleytribune.com/wp-content/uploads/2021/05/GRE-L-UniversityHSGraduation-AM0255.jpg?w=300/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.greeleytribune.com/wp-content/uploads/2021/05/GRE-L-UniversityHSGraduation-AM0255.jpg?w=300/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.greeleytribune.com/wp-content/uploads/2021/05/GRE-L-UniversityHSGraduation-AM0255.jpg?w=300/171x180" rounded />
        </Col>
       
      </Row>
    </Container>
  



    </div>
    </>
  )
}

export default ReunionPhotoGallery;