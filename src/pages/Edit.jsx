import React, { useEffect, useState } from "react";
// import { db } from "../utils/firebase";
import axios from "../utils/axios";

import { useHistory } from "react-router-dom";

import styles from "../styles/Edit.module.css";

import View from "./View";

const quickMessages = [
  { id: 1, title: "Keep Distance" },
  { id: 2, title: "Use Sanitizer" },
  { id: 3, title: "Please Wait" },
  { id: 4, title: "Wear Mask" },
  { id: 5, title: "Wash Your Hands" },
];

const Edit = () => {
  const [selectedMsg, setSelectedMsg] = useState("Keep Distance");

  const history = useHistory();
  const userId = localStorage.getItem("name");

  useEffect(() => {
    if (!localStorage.getItem("id")) return history.push("/");
    submitHandler();
  }, []);

  const submitHandler = (title) => {
    let data;
    if (title) {
      setSelectedMsg(title);
      data = {
        title,
      };
    } else {
      data = {
        title: selectedMsg,
      };
    }
    axios.put(`/users/${userId}/message.json`, data);
  };
  return (
    <div className={styles.container}>
      <section className={styles.cards}>
        {quickMessages.map((msg) => (
          <div
            className={styles.card}
            key={msg.id}
            onClick={() => submitHandler(msg.title)}
          >
            {" "}
            {msg.title}
          </div>
        ))}
      </section>
      <section className={styles.custom}>
        <input
          type="text"
          className={styles.message}
          onChange={(e) => setSelectedMsg(e.target.value)}
          placeholder="Message"
          value={selectedMsg}
        />

        <button className={styles.btn} onClick={() => submitHandler()}>
          Submit
        </button>
      </section>
      <section className={styles.view}>
        <View message={selectedMsg} />
      </section>
    </div>
  );
};

export default Edit;
