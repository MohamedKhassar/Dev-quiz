import { useState } from "react"
import "./start.css"
export default function Start() {
    const [major,setM]=useState("")
    return (
        <div className="container">
            <h1 className="title">Select Your Major</h1>
            <div className="container1">
                <div className="animation">
                </div>
                <div className="code-sym">
                    <button className="major-btn" onClick={(e)=>setM(e.target.value)} value="Full-Stack">Full-Stack</button>
                    <button className="major-btn" onClick={(e)=>setM(e.target.value)} value="Front-End">Front-End</button>
                    <button className="major-btn" onClick={(e)=>setM(e.target.value)} value="Back-End">Back-End</button>
                    <button className="start-btn">Start Quiz</button>
                </div>
            </div>
        </div>
    )
}