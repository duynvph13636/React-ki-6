import React from "react";
import styles from "./square.module.css";
import "../../App.css"
const Square = (props) => {
 console.log(props.className);
 console.log(props.data);
 const classNames= props.className
 const names= props.data
  return (
    <button
      className={`${styles.square} ${names?styles.is_x:""}`}
      onClick={()=>props.handlePlay(props.index)}
     
    >
     {props.value}
    </button>
  );
};
export default Square;
