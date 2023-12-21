import './result.css';
import { useLocalStorage } from "../useLocalStorage";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Result() {

  const { getItem } = useLocalStorage("user")
  // const nav = useNavigate()

  // useEffect(()=>{
  //   const clearLocalStorage=()=>{

  //     localStorage.clear()
  //   }
  //   // Clear localStorage when the component is mounted
  //   return () => {
  //     // Add an event listener to the beforeunload event
  //     window.addEventListener('beforeunload', clearLocalStorage);
  //     nav("/")

  //     // Cleanup the event listener when the component is unmounted
  //     return () => {
  //       window.removeEventListener('beforeunload', clearLocalStorage);
  //     };
  //   };
  // });
  
  return (
    <div className="wrapped">

      <div className="list">
        <h1 className="title">Final Result</h1>
        <div className="list1">
          <div className="firstN"><p>First name: </p><p>{getItem().name}</p></div>
          <div className="lastN"><p>Last name: </p><p>{getItem().last}</p></div>
          <div className="major"><p >Major: </p><p >{getItem().major}</p></div>
          <div className="score"><p>Score :</p><p>{getItem().score}%</p></div>

        </div>
        <button className="close" >close</button>
      </div>

    </div>
  )
}
