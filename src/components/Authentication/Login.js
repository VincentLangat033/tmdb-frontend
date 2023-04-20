import { useState, useRef } from "react";
import "./auth.css"
import { useNavigate, NavLink } from "react-router-dom";

function Login({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);

  const navigate = useNavigate();
  const form = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      console.log("empty state");
      return;
    }

    console.log(
      JSON.stringify({
        username,
        password,
      })
    );

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      })
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
          user.admin === true ? navigate("/") : navigate("/register");
        });

        setUsername("");
        setPassword("");
        // setIsShown((current) => !current);
      } else {
        alert("Failed to Log in");
      }
    });

    form.current.reset();
  };
  return (
    <div>
    <div className="container">
    <div className="form-container">
    <h1>Login</h1>
    <form className="submit-login" ref={form} onSubmit={handleSubmit} >
    <label for="username">Username:</label>
				<input type="text" id="username" 
        name="username" placeholder="Enter your username" required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        
        />

				<label for="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="Enter your password" required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

				<input type="submit" value="Login" />


    </form>

			
        


    </div>
	</div>
        
    </div>
  )
}

export default Login