import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import NoteState from "./context/noteState";
import UpdateNote from "./components/UpdateNote";
import About from "./components/About";

function App() {
  return (
    <NoteState>
    <Router>
      <div className="h-screen bg-gray-900">
        <Navbar />

        <div className="md:max-h-[80%] flex items-center justify-center w-[100vw]">
        <Routes>
          <Route exact path="/login" element={<Login />}>
          </Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/addnote" element={<AddNote />}></Route>
          <Route exact path="/updatenote/:id" element={<UpdateNote />}></Route>
        </Routes>
        </div>
        <div className="md:max-h-[80%] w-[80vw] flex mx-auto items-center justify-center">
          <Routes>
          <Route exact path="/" element={localStorage.getItem("token")?<Notes/>:<Hero />}>
          </Route>
          </Routes>
        </div>
      </div>
    </Router>
    </NoteState>
  );  
}

export default App;
