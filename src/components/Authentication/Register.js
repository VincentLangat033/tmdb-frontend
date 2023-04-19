import React from 'react'

function Register() {
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