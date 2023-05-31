// import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/ListGroup';


// const Member = () => {

//   const initialMember = {

//     email: 'jarnold@gmail.com',
//     password: '',
//     graduationYear: '1981',
//     nameAtGraduation: 'Jill Cordiner',
//     currentName: 'Jill Arnold',
//     image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIF.62ErIjcOC2HqOBJAS5oiHQ%26pid%3DApi&f=1&ipt=5982580c9de1926f245a76fce5197c0bad75b65185e9dea502b70e8217ec875c&ipo=images/100px180",
//     memories: [],
//     comments: [],
//     bio: ['My family arrived in Greeley when I was in 2, after my Dad accepted a teaching position at UNC, which is how we became associated with the Lab School.  My brother and I both were K-12ers!  After graduation, I attended beauty school and worked as a hairdresser for several years.  I attended Aims part-time until I got to know Rex Schweers and we were married for 20 years with 2 beautiful kids, Bryant and Molly.  I now am happily married to Kelly Arnold and living in Raleigh NC, working as a Software Engineer.  I love hiking, photography, gardening, and spending time with my husband, pets, children, grandchildren and friends!']
//   }

//   const [member, setMember] = useState(initialMember);

//   return (
//     <Card key={member.id} style={{ width: '18rem' }}>
//     <Card.Img variant="top" src={member.image_url}/>
//     <Card.Body>
//     <Card.Title>{member.nameAtGraduation}</Card.Title>
//     <ListGroup className="list-group-flush">
//         <ListGroup.Item>{member.currentName}</ListGroup.Item>
//         <ListGroup.Item>{member.graduationYear}</ListGroup.Item>
//         <ListGroup.Item>{member.email}</ListGroup.Item>
//     </ListGroup>
//     <Button variant="primary" href={member.memories}>Memories</Button>
//     <Button variant="primary" href={member.comments}>Comments</Button>
//     <Button variant="primary" href={member.bio}>About</Button>
//     </Card.Body>
//     </Card>
//   )
// }

// export default Member;