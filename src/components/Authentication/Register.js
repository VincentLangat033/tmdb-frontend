import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [user, setUser] = useState("")

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
      }
      ),

    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        alert("Registration successful")
         navigate("/")
         setname("");
         setemail("");
         setusername("")
         setpassword("");
         e.target.reset("");

      }
      else{
        alert("Registration failed")
        

      }
    });
    

  }
  return (
    <div>
        <div className="container">


<div className="form-container">
    <h1>Sign up</h1>
    <form className="register-label" onSubmit={handlesubmit}>
        <label htmlfor="username">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name"  onChange={(e) => {
                  setname(e.target.value);
                }} required />
        <label htmlfor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username"  onChange={(e) => {
                  setusername(e.target.value);
                }} required />

        <label htmlfor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e) => {
                  setemail(e.target.value);
                }} required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" onChange={(e) => {
                  setpassword(e.target.value);
                }} required />

        <input type="submit" value="Sign up" />
    </form>

    <h5 className="already-registered"> clAlready registered? Click here to  <NavLink to='/login'>
        <a href='#'> Logon  </a>
        </NavLink></h5>
</div>
</div>
    </div>
  )
}

export default Register