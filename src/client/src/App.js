import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Join from './components/Join';
import Members from './components/Members';

import Memories from './components/Memories';
import Reunions from './components/Reunions';




const App = () => {

  return (
    <>

 
    <NavBar />
    
    

  

  <BrowserRouter>
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






