import React, { useState } from "react";
import userService from "../service/UserService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function saveUser(e) {
    e.preventDefault();
    const user = { email, password };
    userService.createUser(user).then((response) => {
      alert("Account Created");
    });
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>
          Email:
          <input type="email" value={email} onChange={changeEmail} />
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={changePassword} />
        </label>

        <button onClick={(e) => saveUser(e)}>Sign Up</button>
      </form>
    </div>
  );
}
