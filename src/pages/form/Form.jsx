import  {useState} from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';
import {useLocalStorage} from "../useLocalStorage.js"
export default function Form() {
  const [name,setName]=useState("")
  const [last,setLast]=useState("")
  const [email,setEmail]=useState("")
  const nav=useNavigate()

  const {setItem}=useLocalStorage("user")


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
            <label htmlFor="name">Last name</label>
            <input type="text" id='lasName' name='lastName' placeholder='Enter your last name' onChange={(e)=>setLast(e.target.value)} />
          </div>
        </div>
        <div className="email">
        <label htmlFor="email">Email</label>
        <input type='mail' id='email' name='email' value={FormData.email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button className='start-btn' onClick={()=>{setItem({name,last,email});nav("/start")}}>Start Quiz</button>
        </form>
      </div>
    </div>
  )
}
