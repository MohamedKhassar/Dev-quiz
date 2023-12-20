import  { useState } from 'react';
import './Quiz.css';
import questions from './data';
import { useLocalStorage } from './useLocalStorage';
function Quiz(){
    const {getItem}=useLocalStorage("major")
    const question = questions.filter(q => q.category === getItem())
    console.log(question);
    let [i, setI] = useState(0);
    const [next, setN] = useState(question[i])

    

    const nexQuestion = () => {
        if (i < question.length - 1) {
            setI(pre => pre += 1)
            setN(question[i])
        } else {
            setI(0)
            alert("hi")
            
        }

        console.log(next);
    }
    return(
        <>
        <div className="all">
        <h1 className="cat">Full-Stack<hr />
        </h1>
        
        <p className="qst">What does &quot;Full-Stack&quot; refer to in the context of web development?</p>
        <p className='number'>1/10</p>
        <div className='options'>
        {}
        <button  id="0">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</button>
        <button className='next'>Next question</button>
        </div>
        </div>
        </>
    )
}
export default Quiz