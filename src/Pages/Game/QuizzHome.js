import React from 'react'
import {useNavigate} from "react-router-dom";
import {Container} from 'react-bootstrap';
import citronJoie from "../../img/Quizz.webp";
import { Link } from 'react-router-dom';
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
                    <Link to={'/Quizzes'}>
                        <div className='d-flex align-items-center'>
                            <img className="citronCategorie img-fluid img-thumbnai" src={citronQuizz}  alt="test"></img>
                            <p className='nb'>1</p>
                            <p className='texteQuizz'>Les différentes poubelles</p>
                        </div>
                    </Link>
                    <Link to={'/Quizzes'}>
                        <div className='d-flex align-items-center'>
                            <img className="citronCategorie img-fluid img-thumbnai" src={citronQuizz}  alt="test"></img>
                            <p className='nb1'>2</p>
                            <p className='texteQuizz'>Les différentes poubelles</p>
                        </div>
                    </Link>
                    <Link to={'/Quizzes'}>
                        <div className='d-flex align-items-center'>
                            <img className="citronCategorie img-fluid img-thumbnai" src={citronQuizz}  alt="test"></img>
                            <p className='nb2'>3</p>
                            <p className='texteQuizz'>Les plastiques</p>
                        </div>
                    </Link>
                    <Link to={'/Quizzes'}>
                        <div className='d-flex align-items-center'>
                            <img className="citronCategorie img-fluid img-thumbnai" src={citronQuizz}  alt="test"></img>
                            <p className='nb3'>4</p>
                            <p className='texteQuizz'>Le verre</p>
                        </div>
                    </Link>
            </Container>
        </div>
    )
}

export default QuizzHome;