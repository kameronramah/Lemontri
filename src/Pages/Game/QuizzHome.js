import React from 'react'
import {useNavigate} from "react-router-dom";


const QuizzHome = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>LE QUIZZ MAZESTUEUX </h1>
            <p>Teste tes connaissances sur le tri </p>
            <ul>
                 <button className='btn btn-warning ' onClick={e => navigate('/Quizzes')}>Les différentes poubelles</button>
                 <button className='btn btn-warning ' onClick={e => navigate('/Quizzes')}>Les plastiques</button>
                 <button className='btn btn-warning ' onClick={e => navigate('/Quizzes')}>Le verre </button>
            </ul>
        </div>
    )
}

export default QuizzHome;