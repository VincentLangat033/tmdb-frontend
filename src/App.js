import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
// import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar />
    {/* <Login /> */}
    <Register />
    </>

  );
}

export default App;
