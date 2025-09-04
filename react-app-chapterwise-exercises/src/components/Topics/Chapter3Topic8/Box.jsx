import React from "react";
import styles from "./box.module.css";

export default function Box({ children }) {
  return (
    <>
    <h3>Example 1:</h3>
    <div
      className="h-14 bg-linear-to-t from-sky-500 to-indigo-500"
      style={{ border: "2px solid black" }}
    >
      {children}
    </div>
    <h3>Example 2:</h3>
    <div
          className={styles.box}
          style={{ border: "2px solid black" }}
        >
          {children}
        </div>
    </>
    
  );
}
