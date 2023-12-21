import React, {useState} from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';
export default function Form() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });
  const nav1 = useNavigate();
  const toStart = ()=>{
     // Event handler for form input changes
  
   // Event handler for form submission
   const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form data submitted:', formData);
    // You can perform additional actions here, such as sending the data to a server
  };
    nav1('/start')
  }
  return (
    <div className='container-form'>
      <div className="form">
        <form onChange={handleSubmit}>
        <h1 className="title">Create your profil</h1>
        <div className="name">
          <div className="first">
            <label htmlFor="name">First name</label>
            <input type="text" id='name' name='firstname' value={formData.firstname} placeholder='Enter your first name' onChange={(e)=>set} />
          </div>
          <div className="last">
            <label htmlFor="name">Last name</label>
            <input type="text" id='lasName' name='lastname' value={formData.lastname} placeholder='Enter your last name' onChange={handleInputChange} />
          </div>
        </div>
        <div className="email">
        <label htmlFor="email">Email</label>
        <input type='mail' id='email' name='email' value={FormData.email} placeholder='Enter your email' onChange={handleInputChange} />
        </div>
        <button className='start-btn' onClick={()=>toStart()}>Start Quiz</button>
        </form>
      </div>
    </div>
  )
}
