import React from 'react';
import './Quiz.css';
function Quiz(){
    return(
        <>
        <div className="all">
        <h1 className="cat">Full-Stack<hr />
        </h1>
        
        <p className="qst">What does "Full-Stack" refer to in the context of web development?</p>
        <p className='number'>1/10</p>
        <div className='options'>
        <button  id="0">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</button>
        <button id="1">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</button>
        <button id="2">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</button>
        <button id="3">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</button>
        <button className='next'>Next question</button>
        </div>
        </div>
        </>
    )
}
export default Quiz