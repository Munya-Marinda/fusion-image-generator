"use client";

import { useState, useEffect } from "react";

const Index = () => {
  const [user, setUser] = useState(false);
  const [screenActivity, setScreenActivity] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {}, []);

  const _handleNewUser = async () => {
    setScreenActivity(false);
    const _user = await handleNewUser(email, password, passwordConfirm);
    setUser(_user);
    setScreenActivity(true);
  };

  return (
    <section style={style.signup_section}>
      <div style={style.signup_container}>
        <h1>Sign Up</h1>
        <p>Register your account today</p>
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
          <input
            type="password"
            value={passwordConfirm}
            placeholder="Confirm Password"
            style={style.textInputStyle}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </main>
        <div>
          <button style={style.buttonStyle} onClick={_handleNewUser}>
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;

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
