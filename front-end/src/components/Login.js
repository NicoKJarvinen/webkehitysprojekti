import React, { useState } from "react";
import "./Login.css";
import loginService from "../services/login";
import carService from "../services/cars";
import { useDispatch } from "react-redux";
import { userLogin } from "../reducers/user";
/**
 * Komponentti kirjautumissivulle.
 * @component
 */
function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  /**
   * Tapahtumankäsittelijä kirjautumistietojen lähettämisestä palvelimelle.
   * @param {object} event tapahtuma. 
   */
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      dispatch(userLogin(user));
      carService.setToken(user.token);
      //setKayttaja(user);
      setUsername("");
      setPassword("");
    } catch (error) {
      // Oikea error message
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="content-box">
          <div className="left"></div>
          <div className="right">
            <h1>Login</h1>
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
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </form>

            <button className="listButton" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
