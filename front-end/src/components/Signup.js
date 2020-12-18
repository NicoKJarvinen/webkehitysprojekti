import React, { useState } from "react";
import "./Signup.css";
import regService from "../services/register";
/**
 * Komponentti rekistöröitymissivulle.
 * @component
 */
function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const [error, setError] = useState("");
  /**
   * Tapahtumankäsittelijä rekisteröinnille, lähettää lomakkeen tiedot palvelimelle.
   * @param {object} event 
   */
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const user = await regService.register({
        username,
        name,
        email,
        phone,
        password,
      });
      console.log(user);
    } catch (error) {
      // Error message
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="content-box">
          <div class="left"></div>
          <div class="right">
            <h1>Registration</h1>
            <p className="errorMessage">{error}</p>
            <form>
              <input
                className="field"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
              <input
                className="field"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              <input
                className="field"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <input
                className="field"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone number"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
              <input
                className="field"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <input
                className="field"
                type="password"
                name="password"
                id="password-repeat"
                placeholder="Password again"
                value={passwordRep}
                onChange={({ target }) => setPasswordRep(target.value)}
              />
            </form>

            <button className="listButton" onClick={handleRegister}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
