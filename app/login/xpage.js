"use client";

import { useState, useEffect } from "react";

const Login = () => {
  const [user, setUser] = useState(false);
  const [screenActivity, setScreenActivity] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {}, []);

  const _handleLogin = async () => {
    setScreenActivity(false);
    const _user = await handleLogin(email, password);
    setUser(_user);
    setScreenActivity(true);
  };

  return (
    <section style={style.signup_section}>
      <div style={style.signup_container}>
        <h1>Login</h1>
        <p>Login to your account</p>
        <main style={style.main}>
          <input
            type="text"
            value={email}
            placeholder="Email"
            style={style.textInputStyle}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            style={style.textInputStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
        </main>
        <div>
          <button style={style.buttonStyle} onClick={_handleLogin}>
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;

const style = {
  signup_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  textInputStyle: {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    width: "100%",
  },
  signup_container: {
    width: "100%",
    maxWidth: "400px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
  },
  buttonStyle: {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    width: "100%",
    backgroundColor: "#0070f3",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
