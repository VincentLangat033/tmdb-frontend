import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()

  const [name, setname] = useState("");
  const [user_name, setusername] = useState("");
  const [user, setUser] = useState("")

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    fetch("https://buk-a-meal.herokuapp.com/users", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        username: user_name,
        email: email,
        password: password,
      }
      ),

    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
         navigate("/login")
         setname("");
         setemail("");
         setusername("")
         setpassword("");
         e.target.reset("");

      }
      else{
        alert()

      }
    });
    

  }
  return (
    <div>
        <div class="container">


<div class="form-container">
    <h1>Sign up</h1>
    <form>
        <label for="username">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        <input type="submit" value="Sign up" />
    </form>

    <h6>Already registered? Click here to logon</h6>
</div>
</div>
    </div>
  )
}

export default Register