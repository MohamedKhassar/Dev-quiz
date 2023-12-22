import  {useState} from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';
import {useLocalStorage} from "../useLocalStorage.js"
export default function Form() {
  const [name,setName]=useState("")
  const [last,setLast]=useState("")
  const [email,setEmail]=useState("")
  const [d,setD]=useState("none-alert")
  const nav=useNavigate()

  const {setItem}=useLocalStorage("user")

  const handelSave=()=>{
    if(name && last && email){
      setItem({name,last,email});
      nav("/start")
    }else{
      setD("block-alert")
    }
  }


  return (
    <div className='container-form'>
      <div className="form">
        <form onSubmit={(e)=>e.preventDefault()}>
        <h1 className="title">Create your profil</h1>
        <div className="name">
          <div className="first">
            <label htmlFor="name">First name</label>
            <input type="text" id='name' name='firstName' placeholder='Enter your first name' onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="last">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id='lastName' name='lastName' placeholder='Enter your last name' onChange={(e)=>setLast(e.target.value)} />
          </div>
        </div>
        <div className="email">
        <label htmlFor="email">Email</label>
        <input type='email' id='email' name='email' value={FormData.email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className={`alert ${d}`}>
            please fill all the fields
        </div>
        <button className='start-btn' onClick={handelSave}>Start Quiz</button>
        </form>
      </div>
    </div>
  )
}
