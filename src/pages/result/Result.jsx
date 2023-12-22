import './result.css';
import { useLocalStorage } from "../useLocalStorage";
import { useNavigate } from 'react-router-dom';
import success from '../../assets/lottie/congrats.json'
import fail from '../../assets/lottie/fail.json'
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

export default function Result() {

  const { getItem } = useLocalStorage("user")
  const [isHide,setIsHide]=useState(false)
  const nav=useNavigate()


useEffect(()=>{
  const timeOute=setTimeout(()=>{

    if (!isHide) {
      setIsHide(true)
    }
    return ()=>clearInterval(timeOute)
  },1500)
},[isHide])

const close=()=>{
  nav("/")
  localStorage.clear()
}

    return (
      <div className="wrapped">
        <div style={{ position: "absolute" }}>

          {!isHide&&<Lottie loop={false} animationData={getItem().score > 50 ? success : fail} />}
        </div>
        <div className="list">
          <h1 className="title">Final Result</h1>
          <div className="list1">
            <div className="firstN"><p>First name: </p><p>{getItem().name}</p></div>
            <div className="lastN"><p>Last name: </p><p>{getItem().last}</p></div>
            <div className="major"><p >Major: </p><p >{getItem().major}</p></div>
            <div className="score"><p>Score :</p><p>{getItem().score}%</p></div>

          </div>
          <button className="close" onClick={close}>close</button>
        </div>

      </div>
    )
  }
