import { useEffect, useState} from 'react';
import './Quiz.css';
import questions from '../data';
import { useLocalStorage } from '../useLocalStorage';
import { useNavigate } from 'react-router-dom';
function Quiz() {
    const { getItem } = useLocalStorage("user")
    const question = questions.filter(q => q.category == getItem().major)
    let [i, setI] = useState(0);
    const [next, setN] = useState(question[i])
    const [answer,setAns]=useState("")
    const nav=useNavigate()
    let [correctAnswer,setCorrectAns]=useState(0)
    const {setItem}=useLocalStorage("user")
    let [limit,setLimit]=useState(60)
    const [display, setDisplay] = useState('none');
    const value={...getItem(),score:Math.round((correctAnswer*100)/question.length)}
    const buttons=document.querySelectorAll("button")

useEffect ( ()=>{
    const timeOut=setTimeout(
        
        ()=>{
            setLimit(limit-=1)
            if (limit===0) {
                nexQuestion()
                
            }
             
        },1000)
        return ()=> clearTimeout(timeOut)  //clean up when the component unmounts
 },[limit])
  
          
    const nexQuestion = () => {
        if (i < question.length - 1) {
            
            if (question[i].correctAnswer===answer) {
                
                setCorrectAns(correctAnswer+=1)
            }
            setI(i+=1)
            setN(question[i])
        } else {
            setI(0)
            if(display){
                setDisplay('block');
            }
            
            
        }
        setLimit(limit=60)
        buttons.forEach(button => {
            // Check if the "outline" class exists in the current button's classList
            const hasOutlineClass = button.classList.contains('outline');
          
            if (hasOutlineClass) {
              button.classList.remove('outline')
              // Do something when the "outline" class is present
            }
            // Do something when the "outline" class is not present
          });
        

    }

    const handelClick=(e)=>{
        setAns(e.target.value)
        buttons.forEach(button => {
            // Check if the "outline" class exists in the current button's classList
            const hasOutlineClass = button.classList.contains('outline');
          
            if (hasOutlineClass) {
              button.classList.remove('outline')
              // Do something when the "outline" class is present
            }
            return e.target.classList.add('outline')
            // Do something when the "outline" class is not present
          });
    
          
}
    
    return (
        <>
            <div className={`all ${display=="block" && "blur"}`} >
                <h1 className="cat">{getItem().major}<hr />
                </h1>

                <p className="qst">{next.question}</p>
                <p className='number'>{i+1}/{question.length}</p>
                <div className='options'>
                    {next.options.map((q,i) => {
                        return (

                            <button key={i} className='answer-btn' onClick={handelClick} value={q}>{q}</button>
                            )
                    }

                    )}
                    <p className={`limit ${display=="block" && "none"}`}>time remaining : {limit==60?"1:00":`00:${limit<10?`0${limit}`:limit}`}</p>
                    <button className='next' onClick={nexQuestion}  disabled={display==="block"&&true} style={{ cursor:display==="block"&&"auto" }}>Next question</button>
                    
                </div>
            </div>
            <div className={display}>
                        <div className="pop">
                        <p className='p1'>Correct answers</p>
                        <p className='p2'>{correctAnswer}/{question.length} </p>
                        <button className="close" onClick={()=>{setItem(value);nav('/result')}}>Move to Final Result</button>
                        </div>
                    </div>
        </>
    )
}
export default Quiz