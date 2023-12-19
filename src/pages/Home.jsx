import React from 'react';
import './Home.css';
export default function Home() {
  setInterval(function (){
    window.location.href = '/Start';
  },1500)

  return (
    <div className="containerX">
      <div className="titleX">Welcome to “DevRecruit”</div> 
      <div className="image"></div>
    </div>
  )
}

