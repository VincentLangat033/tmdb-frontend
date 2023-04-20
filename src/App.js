import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Movie from './components/TmDb/Movie'
import { Route, Routes } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
    <Navbar />
    <Routes>

       <Route exact path="/" element ={<Movie />} />
       <Route exact path="/register" element ={<Register />} />
       <Route path="/login" element={<Login user={user} setUser={setUser}/> } />
       </Routes>
    </>

  );
}

export default App;
