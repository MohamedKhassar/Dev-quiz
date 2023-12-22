import './result.css';
import { useLocalStorage } from "../useLocalStorage";
import { useNavigate } from 'react-router-dom';
import animationData from '../../assets/lottie/congrats.json'
import Lottie from 'lottie-react';

export default function Result() {

  const { getItem } = useLocalStorage("user")
  const nav = useNavigate()

  const close = () => {
    localStorage.clear()
    nav("/")
  }

  return (
    <div className="wrapped">
      <div style={{ position:"absolute" }}>
        <Lottie loop={false} width={"90%"} animationData={animationData}   />
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
