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
    const [lastBtn, setLastBtn] = useState(null)

    // console.log(answer);

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
  
          
    const nexQuestion = (e) => {
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
        if (lastBtn==null) {
            e.target.classList.add('outline')
            setLastBtn(e)
        }
        else{
            
            lastBtn.target.classList.remove('outline')
            e.target.classList.add('outline')
            setLastBtn(e)
            
        }   
        setAns(e.target.value)
        

    }

    const handelClick=(e)=>{
        if (lastBtn==null) {
            e.target.classList.add('outline')
            setLastBtn(e)
        }
        else{
            
            lastBtn.target.classList.remove('outline')
            e.target.classList.add('outline')
            setLastBtn(e)
            
        }   
        setAns(e.target.value) 
          
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

                            <button key={i} className='answer-btn'  onClick={handelClick} value={q}>{q}</button>
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