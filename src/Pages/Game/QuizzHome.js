import React from 'react'
import {useNavigate} from "react-router-dom";
import {Container} from 'react-bootstrap';
import citronJoie from "../../img/Quizz.webp";
import citronQuizz from "../../img/citronQuizz.webp";



const QuizzHome = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <Container className="w-100 mx-auto">
                <div className='quizHaut text-center mt-4'>
                    <h1>LE QUIZZ MAZESTUEUX </h1>
                    <p>Teste tes connaissances sur le tri </p>
                    <img className="citronQuizz img-fluid img-thumbnai" src={citronJoie}  alt="test"></img>
                </div>
               
                
                <div className='d-flex'>
                    <img className="citronCategorie img-fluid img-thumbnai" src={citronQuizz}  alt="test"></img>
                    <p className='nb'>1</p>
                    <div  className='boutonQuizz'>
                        <button className='btn btn-warning ' onClick={e => navigate('/Quizzes')}>Les différentes poubelles</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <img className="citronCategorie img-fluid img-thumbnai" src={citronQuizz}  alt="test"></img>
                    <p className='nb1'>2</p>
                    <div  className='boutonQuizz'>
                        <button className='btn btn-warning ' onClick={e => navigate('/Quizzes')}>Les différentes poubelles</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <img className="citronCategorie img-fluid img-thumbnai" src={citronQuizz}  alt="test"></img>
                    <p className='nb2'>3</p>
                    <div  className='boutonQuizz'>
                        <button className='btn btn-warning ' onClick={e => navigate('/Quizzes')}>Les plastiques</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <img className="citronCategorie img-fluid img-thumbnai" src={citronQuizz}  alt="test"></img>
                    <p className='nb3'>4</p>
                    <div  className='boutonQuizz'>
                        <button className='btn btn-warning ' onClick={e => navigate('/Quizzes')}>Le verre </button>
                    </div>
                </div>
                    
                   
                    
                    
            
            </Container>
        </div>
    )
}

export default QuizzHome;