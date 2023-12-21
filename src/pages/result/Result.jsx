import React from "react";
import './result.css';
import { useLocalStorage } from "../useLocalStorage";

export default function Result() {
  const { getItem } = useLocalStorage("user")
console.log(getItem()); 
  return (
    <div className="wrapped">

      <div className="list">
        <h1 className="title">Final Result</h1>
        <div className="list1">
          <div className="firstN"><p>First name: </p><p>Mohamed</p></div>
          <div className="lastN"><p>Last name: </p><p>Khassar</p></div>
          <div className="major"><p >Major: </p><p >Full-Stack</p></div>
          <div className="score"><p>Score :</p><p>100%</p></div>
          
        </div>
        <button className="close">close</button>
      </div>

    </div>
  )
}
