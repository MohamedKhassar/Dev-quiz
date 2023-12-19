import React from 'react';
import './Home.css';
export default function Home() {
  setInterval(function (){
    window.location.href = '/Start';
  },2000)

  return (
    <div className="container">
      <div className="title">Welcome to “DevRecruit”</div> 
      <div className="image"></div>
    </div>
  )
}

