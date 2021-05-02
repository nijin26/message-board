import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import randomChar from "../utils/randomChar";

import styles from "../styles/Home.module.css";

const id = randomChar(5);

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [link, setLink] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const uniqueId = localStorage.getItem("id");
    if (uniqueId) return history.push("/edit");
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const uniqueId = name.replace(/\s+/g, "").toLowerCase() + "_" + id;
    setLink(() => uniqueId);
    const register = {
      name,
      email,
      number,
      id,
    };
    localStorage.setItem("id", uniqueId);
  };

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    setTimeout(() => {
      history.push("/edit");
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form onSubmit={submitHandler}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="Mobile Number"
          />
          <button type="submit" disabled={!name | !email | !number}>
            {" "}
            Register
          </button>
        </form>
        {link != "" && (
          <div className={styles.link}>
            <input
              type="text"
              ref={textAreaRef}
              value={`${window.location.protocol}//${window.location.host}/${link}`}
            />
            <button onClick={copyToClipboard}>
              Copy & Create Your Message
            </button>
          </div>
        )}
        <div>{copySuccess}</div>
      </div>
    </div>
  );
};

export default Home;
