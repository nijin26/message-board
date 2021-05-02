import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebase";

import styles from "../styles/View.module.css";

const View = ({ message }) => {
  const { id } = useParams();

  const [msg, setMsg] = useState("");

  useEffect(() => {
    const collection = db.ref("users");

    collection.on("value", (snapshot) => {
      let usersList = [];
      snapshot.forEach((snap) => {
        usersList.push(snap.val());
      });
      usersList.filter((user) => {
        if (user.uniqueId === id) {
          setMsg(user.message.title);
        }
      });
    });
  }, []);

  return <div className={styles.container}> {msg ? msg : message} </div>;
};

export default View;
