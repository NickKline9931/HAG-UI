import React, { useState } from "react";
import userService from "../UserService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function saveUser(e) {
    e.preventDefault();
    const user = { email, password };
    userService.createUser(user).then((response) => {
      alert("Account created with email " + response);
    });
  }

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button onClick={(e) => saveUser(e)}>Sign Up</button>
      </form>
    </div>
  );
}
