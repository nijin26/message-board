import React, { useState } from "react";

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
  const [selectedMsg, setSelectedMsg] = useState("");

  return (
    <div className={styles.container}>
      <section className={styles.cards}>
        {quickMessages.map((msg) => (
          <div
            className={styles.card}
            key={msg.id}
            onClick={() => setSelectedMsg(msg.title)}
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
        />

        <button className={styles.btn}>Submit</button>
      </section>
      <section className={styles.view}>
        <View message={selectedMsg} />
      </section>
    </div>
  );
};

export default Edit;
