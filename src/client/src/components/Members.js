import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
  
const Members = () => {
  return (
    <>
    <h1 className="center-headline">Class of 1981- need infinite scroll</h1>
    
    
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIF.62ErIjcOC2HqOBJAS5oiHQ%26pid%3DApi&f=1&ipt=5982580c9de1926f245a76fce5197c0bad75b65185e9dea502b70e8217ec875c&ipo=images/100px180" />
      <Card.Body>
        <Card.Title>Jill Arnold</Card.Title>
        <Card.Text>
          This would be the first 20 words of Jill's bio...
        </Card.Text>
        <Card.Link href="memories">Jill's memories</Card.Link>
        <Card.Link href="memories.comments">Jill's comments</Card.Link>
     
        <Button variant="primary" href="bios">Jill's Bio</Button>
      </Card.Body>
    </Card>
    </>
  );
}


  
export default Members;