import React, { useState } from "react";
import randomChar from "../utils/randomChar";

import styles from "../styles/Home.module.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [link, setLink] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setLink(() => name.replace(/\s+/g, "").toLowerCase() + "_" + randomChar(5));
    const register = {
      name,
      email,
      number,
    };
    console.log(register);
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
        {link != "" && <div className={styles.link}>{link}</div>}
      </div>
    </div>
  );
};

export default Home;
