import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Join from "./components/Join";
import Members from "./components/Members";
import MemberBio from "./components/MemberBio";
import MemberProfile from "./components/MemberProfile";
import Memories from "./components/Memories";
import Reunions from "./components/Reunions";
import CreateReunion from "./components/CreateReunion";
import CreateMemory from "./components/CreateMemory";
import ReunionPhotos from "./components/ReunionPhotos";
import NextReunions from './components/NextReunions';


// export const BASE_URL = "https://gather-z3tj.onrender.com";
export const BASE_URL = "http://localhost:5000";

const App = () => {

  const [loggedInMember, setLoggedInMember] = useState(null);

  useEffect(() => {
    const memberFromStorage = localStorage.getItem("member");  //member from storage is only memberId and email
    if (memberFromStorage) {
      setLoggedInMember(JSON.parse(memberFromStorage));
    }
  }, []);

  

  const handleLogout = () => {
    setLoggedInMember(null);
    localStorage.removeItem("member");
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          loggedInMember={loggedInMember}
          setLoggedInMember={setLoggedInMember}
          handleLogout={handleLogout}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<Login setLoggedInMember={setLoggedInMember} />}
          />
          <Route
            path="/join"  //new Member
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
            path="/profile"
            element={
              <MemberProfile
                loggedInMember={loggedInMember}
                handleLogout={handleLogout}
              />
            }
          />

          <Route
            path="/memories"
            element={<Memories loggedInMember={loggedInMember} />}
          />
          <Route  //createComment
            path="/memories/:id/comments"
            element={<Memories loggedInMember={loggedInMember} />}
          />
          <Route  //getComments
            path="/memories/:id/comments"
            element={<Memories loggedInMember={loggedInMember} />}
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
            path="/nextReunions"
            element={<NextReunions loggedInMember={loggedInMember} />}
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
