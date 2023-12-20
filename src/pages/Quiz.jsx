import { useState } from 'react';
import './Quiz.css';
import questions from './data';
import { useLocalStorage } from './useLocalStorage';
import { useNavigate } from 'react-router-dom';
function Quiz() {
    const { getItem } = useLocalStorage("major")
    const question = questions.filter(q => q.category === getItem())
    let [i, setI] = useState(0);
    const [next, setN] = useState(question[i])
    const [answer,setAns]=useState("")
    const nav=useNavigate()
    let [correctAnswer,setCorrectAns]=useState(0)
    
    
    console.log(answer);
    const nexQuestion = () => {
        if (i < question.length - 1) {
            
            console.log(question[i].correctAnswer);
            if (question[i].correctAnswer===answer) {
                alert("correct")
                setCorrectAns(correctAnswer+=1)
            }
            setI(i+=1)
            setN(question[i])
        } else {
            setI(0)
            alert(`You answered ${correctAnswer}`)
            nav("/")

        }
    }
    return (
        <>
            <div className="all">
                <h1 className="cat">Full-Stack<hr />
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
                    <button className='next' onClick={nexQuestion}>Next question</button>
                </div>
            </div>
        </>
    )
}
export default Quiz