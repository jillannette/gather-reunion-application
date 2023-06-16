import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Join from "./components/Join";
import Members from "./components/Members";
import MemberBio from "./components/MemberBio";
import Memories from "./components/Memories";
import Comments from './components/Comments';
import Reunions from "./components/Reunions";
import CreateReunion from "./components/CreateReunion";
import CreateMemory from "./components/CreateMemory";
import CreateComment from './components/CreateComment';
import ReunionPhotos from "./components/ReunionPhotos";

const App = () => {
  const [loggedInMember, setLoggedInMember] = useState(null);
  
  useEffect(() => {
    const memberFromStorage = localStorage.getItem("member");
    if (memberFromStorage) {
      setLoggedInMember(JSON.parse(memberFromStorage));
   }
  }, []);

 return (
    <>
      <BrowserRouter>
        <NavBar
          loggedInMember={loggedInMember}
          setLoggedInMember={setLoggedInMember}
        
       />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<Login setLoggedInMember={setLoggedInMember} />}
          />
          <Route
            path="/join"
            element={<Join setLoggedInMember={setLoggedInMember} />}
          />
          <Route
            path="/members"
            element={<Members loggedInMember={loggedInMember} />}
          />
          <Route
            path="/members/:id"
            element={<MemberBio loggedInMember={loggedInMember} />}
          />
          <Route
            path="/memories"
            element={<Memories loggedInMember={loggedInMember} />}
          />
          <Route
            path="/memories/:id/comments"
            element={<CreateComment loggedInMember={loggedInMember} />}
          />
          <Route
            path="/memories/:id/comments"
            element={<Comments loggedInMember={loggedInMember} />}
          />

          <Route
            path="/reunions"
            element={<Reunions loggedInMember={loggedInMember} />}
          />
          <Route
            path="/createReunion"
            element={<CreateReunion loggedInMember={loggedInMember} />}
          />

          <Route
            path="/createMemory"
            element={<CreateMemory loggedInMember={loggedInMember} />}
          />
           
          <Route
            path="/reunions/:year"
            element={<ReunionPhotos loggedInMember={loggedInMember} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
