import { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const nav=useNavigate()

  useEffect(() => {
    
    const inter=setInterval(function (){
    nav('/form');
  },1500)
    return () => {
      clearInterval(inter)
    };
  });

  return (
    <div className="containerX">
      <div className="titleX">Welcome to “DevRecruit”</div> 
      <div className="image"></div>
    </div>
  )
}

