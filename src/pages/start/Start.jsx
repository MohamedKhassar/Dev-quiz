import { useState } from "react"
import "./start.css"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../useLocalStorage"
export default function Start() {
    const [major, setM] = useState("")
    
    const {setItem}=useLocalStorage("user")
    const {getItem}=useLocalStorage("user")
    
    const value={...getItem(),major}
    
    const handelClick=(e)=>{
        setM(e.target.value)
        const buttons=document.querySelectorAll(".major-btn")
        buttons.forEach(button => {
            // Check if the "outline" class exists in the current button's classList
            const hasOutlineClass = button.classList.contains("outline");
          
            if (hasOutlineClass) {
              button.classList.remove("outline")
              // Do something when the "outline" class is present
            }
            return e.target.classList.add("outline")
            // Do something when the "outline" class is not present
          });
    
}

    const nav = useNavigate()
    return (
        <div className="container">
            <h1 className="title">Select Your Major</h1>
            <div className="container1">
                <div className="animation">
                </div>
                <div className="code-sym">
                    <button className="major-btn" onClick={handelClick} value="Full-stack">Full-Stack</button>
                    <button className="major-btn" onClick={handelClick} value="Frontend">Front-End</button>
                    <button className="major-btn" onClick={handelClick} value="Backend">Back-End</button>
                    <button className="start-btn" onClick={() => {setItem(value) ;nav("/quiz")}}>Start Quiz</button>
                </div>
            </div>
        </div>
    )
}
