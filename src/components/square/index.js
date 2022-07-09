import React, { useState } from "react";
import styles from "./square.module.css";

const Square = ({status, index, handlePlay, value}) => {
  let styleWin;
  if (status[index] === true) {
    styleWin = { background: "green", color: "white", border: "none" };
  }
  return (
    <button onClick={handlePlay} className={styles.square} style={styleWin}>
      {value}
    </button>
  );
};
export default Square;
