import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Join from './components/Join';
import Members from './components/Members';
import Memories from './components/Memories';
import Reunions from './components/Reunions';



const App = () => {
  return (
    <>
   
 
    <BrowserRouter>
    
    <Navbar className="nav" bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="join">Join</Nav.Link>
            <Nav.Link href="members">Members</Nav.Link>
            <Nav.Link href="memories">Memories</Nav.Link>
            <Nav.Link href="reunions">Reunions</Nav.Link>
           



           
          </Nav>
      
      </Container>
    </Navbar>

    <Routes>
    <Route path="/" element={<HomePage/>} />
      <Route path="login" element={<Login login={Login}/>} />
      <Route path="join" element={<Join join={Join}/>} />
      <Route path="members" element={<Members members={Members}/>} />
      <Route path="memories" element={<Memories memories={Memories}/>} />
      <Route path="reunions" element={<Reunions reunions={Reunions}/>} />





      
    </Routes>
    
    
    
    
    </BrowserRouter>
    </>
    
  );
};

export default App;






