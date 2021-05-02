import React from "react";

import styles from "../styles/View.module.css";

const View = ({ message }) => {
  return <div className={styles.container}> {message} </div>;
};

export default View;
