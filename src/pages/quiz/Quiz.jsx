import { useEffect, useState} from 'react';
import './Quiz.css';
import questions from '../data';
import { useLocalStorage } from '../useLocalStorage';
import { useNavigate } from 'react-router-dom';
function Quiz() {
    const { getItem } = useLocalStorage("major")
    const question = questions.filter(q => q.category === getItem())
    let [i, setI] = useState(0);
    const [next, setN] = useState(question[i])
    const [answer,setAns]=useState("")
    const nav=useNavigate()
    let [correctAnswer,setCorrectAns]=useState(0)
    const {setItem}=useLocalStorage("correctAns")
    let [limit,setLimit]=useState(60)
    const [display, setDisplay] = useState('none');

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

    }
    
    return (
        <>
            <div className={`all ${display=="block" && "blur"}`}>
                <h1 className="cat">{getItem()}<hr />
                </h1>

                <p className="qst">{next.question}</p>
                <p className='number'>{i+1}/{question.length}</p>
                <div className='options'>
                    {next.options.map((q,i) => {
                        return (

                            <button key={i} onClick={(e)=>setAns(e.target.value)} value={q}>{q}</button>
                            )
                    }

                    )}
                    <p className={`limit ${display=="block" && "none"}`}>time remaining : {limit==60?"1:00":`00:${limit<10?`0${limit}`:limit}`}</p>
                    <button className='next' onClick={nexQuestion}>Next question</button>
                    
                </div>
            </div>
            <div className={display}>
                        <div className="pop">
                        <p className='p1'>Correct answers</p>
                        <p className='p2'>{correctAnswer}/{question.length} </p>
                        <button className="close" onClick={()=>{setItem((correctAnswer*100)/question.length);nav('/')}}>close</button>
                        </div>
                    </div>
        </>
    )
}
export default Quiz