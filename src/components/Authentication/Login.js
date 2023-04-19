import React from 'react'
import "./auth.css"

function Login() {
  return (
    <div>
    <div className="container">
    <div className="form-container">
    <h1>Login</h1>
    <form className="submit-login">
    <label for="username">Username:</label>
				<input type="text" id="username" name="username" placeholder="Enter your username" required />

				<label for="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="Enter your password" required />

				<input type="submit" value="Login" />


    </form>

			
        


    </div>
	</div>
        
    </div>
  )
}

export default Login