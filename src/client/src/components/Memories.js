import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Memory from './Memory';
  
const Memories = (props) => {

  // const memoryItems = props.memories.map((memory) => {
  //   return (
  //     <Memory 
  //       key={memory.id}
  //       member={{name: memory.member = props.member.nameAtGraduation}}
  //       memory={memory.text}
  //       comments={memory.comment = props.comment.text}
  //       commentedBy={{name: memory.comment = props.comment.member.nameAtGraduation}}

  //        />
  //   )
  // })

    return (
    <>
    <div className='memory-background'>
      <div className='memory'>
        <br></br>
      <div style={{float: 'right'}}>
    <Button variant='light' className='add-memory-button'>Add Your Memories</Button>
    </div>
    <div>
    <h1 className="memory-headline">Memories</h1>
    </div>
   
    <div>
      <br></br>
     
      <InputGroup>
        <InputGroup.Text className='input-text'>{Memory.member}</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="your memories here...">{Memory.memory}</Form.Control> 
        <Button variant='light' className='add-comment-button' id='button-addon1'>Add a Comment</Button>
        
      </InputGroup>
      <br></br>
      <InputGroup>
        <InputGroup.Text className='input-text'>Jill Cordiner remembers:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Remember that day we all went out to Carter Lake - what a great day!!!"></Form.Control> 
        <Button variant='light' className='add-comment-button' id='button-addon1'>Add a Comment</Button>
        
        </InputGroup>
      <br></br>
      <InputGroup>
        <InputGroup.Text className='input-text'>Jill Cordiner remembers:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Remember that day we all went out to Carter Lake - what a great day!!!"></Form.Control> 
        <Button variant='light' className='add-comment-button' id='button-addon1' >Add a Comment</Button>
        
      </InputGroup>
      </div>
    
    </div>
    </div>
   
  
    </>
  );
};

  
export default Memories;