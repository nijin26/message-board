import React, { useState } from "react";

import styles from "../styles/Edit.module.css";

import View from "./View";

const quickMessages = [
  { id: 1, title: "Keep Distance" },
  { id: 2, title: "Use Sanitizer" },
  { id: 3, title: "Please Wait" },
  { id: 4, title: "Wear Mask" },
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
      <View message={selectedMsg} />
    </div>
  );
};

export default Edit;
