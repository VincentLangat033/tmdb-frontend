import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Movie from './components/TmDb/Movie'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar />
    <Routes>

       <Route exact path="/" element ={<Movie />} />
       <Route exact path="/register" element ={<Register />} />
       <Route exact path="/login" element ={<Login />} />
       </Routes>
    </>

  );
}

export default App;
