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
import ArchiveReunion from "./components/ArchiveReunion";
import CreateNextReunion from "./components/CreateNextReunion";
import CreateMemory from "./components/CreateMemory";
import ReunionPhotos from "./components/ReunionPhotos";
import NextReunion from "./components/NextReunion";

// export const BASE_URL = "https://gather-z3tj.onrender.com";
export const BASE_URL = "http://localhost:5000";

const App = () => {
  const [loggedInMember, setLoggedInMember] = useState(null);

  useEffect(() => {
    const memberFromStorage = localStorage.getItem("member"); //member from storage is only memberId and email
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
            path="/join" //new Member
            element={<Join setLoggedInMember={setLoggedInMember} />}
          />
          <Route
            path="/members" //get all members
            element={<Members loggedInMember={loggedInMember} />}
          />
          <Route
            path="/members/:id"
            element={<MemberBio loggedInMember={loggedInMember} />}
          />
          <Route
            path="/profile" //loggedInMember
            element={
              <MemberProfile
                loggedInMember={loggedInMember}
                handleLogout={handleLogout}
              />
            }
          />

          <Route
            path="/memories" //get all memories
            element={<Memories loggedInMember={loggedInMember} />}
          />
          <Route
            path="/memories/:id" //getMemory
            element={<Memories loggedInMember={loggedInMember} />}
          />
          <Route
            path="/reunions" //get all reunions
            element={<Reunions loggedInMember={loggedInMember} />}
          />
          <Route
            path="/reunions"
            element={<ArchiveReunion loggedInMember={loggedInMember} />}
          />
          <Route
            path="/nextReunions/:year"  //add NextReunion Map
            element={<NextReunion loggedInMember={loggedInMember} />}
          />
          <Route
            path="/createNextReunion"  //add Upcoming Reunion
            element={<CreateNextReunion loggedInMember={loggedInMember} />}
          />
          <Route
            path="/nextReunions"  //get next reunion WITH map
            element={<NextReunion loggedInMember={loggedInMember} />}
          />
          <Route
            path="/createMemory"
            element={<CreateMemory loggedInMember={loggedInMember} />}
          />
          <Route
            path="/reunions/:year" //get reunion photo gallery
            element={<ReunionPhotos loggedInMember={loggedInMember} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
