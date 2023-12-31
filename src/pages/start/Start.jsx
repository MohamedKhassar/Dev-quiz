import { useState } from "react"
import "./start.css"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../useLocalStorage"
export default function Start() {
    const [major, setM] = useState("")
    const [d, setD] = useState("none-start")
    const [lastBtn, setLastBtn] = useState(null)

    const { setItem } = useLocalStorage("user")
    const { getItem } = useLocalStorage("user")
    const nav = useNavigate()
    const value = { ...getItem(), major }

    const handelClick = (e) => {
        if (lastBtn==null) {
            e.target.classList.add('outline')
            setLastBtn(e)
        }
        else{
            
            lastBtn.target.classList.remove('outline')
            e.target.classList.add('outline')
            
            setLastBtn(e)
        } 
        setM(e.target.value)
        

    }

    const handelSave = () => {
        if (major) {
            setItem(value);
            nav("/quiz")
        } else {
            setD("block-start")
        }
    }

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
                    <button className="start-btn" onClick={handelSave}>Start Quiz</button>
                </div>
            </div>
                    <div className={`alert-start ${d}`}>
                        please select a major
                    </div>
        </div>
    )
}
