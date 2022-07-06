import React from "react";
import styles from "./square.module.css";
import "../../App.css"
const Square = (props) => {
 const classNames= props.className
 const names= props.data
 let backgrou;
 if(props.stt[props.index]===true){
    backgrou={background:'green'}
 }
  return (
    <button
      className={`${styles.square} ${names?styles.is_x:""}`}
      onClick={()=>props.handlePlay(props.index)}
     style={backgrou}
    >
     {props.value}
    </button>
  );
};
export default Square;
