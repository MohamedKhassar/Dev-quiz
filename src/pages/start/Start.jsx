import { useState } from "react"
import "./start.css"
import { useNavigate } from "react-router-dom"
import questions from "../data"
export default function Start() {
    const [major,setM]=useState("")
    const question=questions.filter(q=>q.category===major)
    console.log(question);
    const nav=useNavigate()
    return (
        <div className="container">
            <h1 className="title">Select Your Major</h1>
            <div className="container1">
                <div className="animation">
                </div>
                <div className="code-sym">
                    <button className="major-btn" onClick={(e)=>setM(e.target.value)} value="Full-stack">Full-Stack</button>
                    <button className="major-btn" onClick={(e)=>setM(e.target.value)} value="Frontend">Front-End</button>
                    <button className="major-btn" onClick={(e)=>setM(e.target.value)} value="Backend">Back-End</button>
                    <button className="start-btn" onClick={()=>nav("/quiz")}>Start Quiz</button>
                </div>
            </div>
        </div>
    )
}
