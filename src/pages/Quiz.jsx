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
    console.log(next);
    const [answers,setAns]=useState([])
    const nav=useNavigate()


    const nexQuestion = () => {
        if (i < question.length - 1) {
            setI(i+=1)
            setN(question[i])
        } else {
            setI(0)
            nav("/start")

        }

        console.log(next);
    }
    return (
        <>
            <div className="all">
                <h1 className="cat">Full-Stack<hr />
                </h1>

                <p className="qst">{next.question}</p>
                <p className='number'>{i+1}/{question.length}</p>
                <div className='options'>
                    {next.options.map(q => {
                        return (

                            <button key={next.id} value={q} onClick={(e)=>setAns(e.target.value)}>{q}</button>
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