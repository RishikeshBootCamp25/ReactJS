import React from "react";
import styles from "./box.module.css";

export default function Box({ children }) {
  return (
    <div
      className={styles.box}
      style={{ border: "2px solid black" }}
    >
      {children}
    </div>
  );
}
