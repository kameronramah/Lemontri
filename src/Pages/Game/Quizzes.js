import { Container } from 'react-bootstrap';
import React, { useState ,  useEffect  } from 'react';
import {useNavigate} from "react-router-dom";
import citronJoie from "../../img/Happy_Zesty.webp";


export default function App() {
	const navigate = useNavigate();
	
	const questions = [
		{
			questionText: 'Quel est le symbole utilisé pour indiquer qu\'un emballage peut être recyclé ?',
			answerOptions: [
				{ answerText: 'Un triangle avec une flèche à l\'intérieur', isCorrect: true },
				{ answerText: 'Un cercle avec une poubelle à l\'intérieur', isCorrect: false },
				{ answerText: 'Un carré avec une poubelle à l\'intérieur', isCorrect: true },
				{ answerText: 'Un cercle avec une flèche à l\'intérieur', isCorrect: false },
			],
		},
		{
			questionText: 'Quel est l\'avantage du recyclage pour l\'environnement ?',
			answerOptions: [
				{ answerText: ' Il permet de réduire les déchets ', isCorrect: true },
				{ answerText: 'Il permet de créer de nouveaux emplois', isCorrect: true },
				{ answerText: 'Il permet de réduire la consommation d\'énergie', isCorrect: true },
				{ answerText: 'Toutes les réponses sont correctes', isCorrect: true },
			],
		},
	    
		{
			questionText: 'Parmi les propositions ci-dessous, laquelle ne va pas dans la poubelle jaune signalée par ce macaron :  ',
			answerOptions: [
				{ answerText: 'Une bouteille d’eau vide en plastique', isCorrect: false },
				{ answerText: 'Une bouteille de jus d’orange vide en plastique', isCorrect: false },
				{ answerText: 'Une canette', isCorrect: true },
				{ answerText: 'Une bouteille d’eau vide en verre', isCorrect: false },
			],
		},
		{
			questionText: 'Quelle est la matière la plus difficile à recycler ?  ',
			answerOptions: [
				{ answerText: 'Le papier', isCorrect: false },
				{ answerText: 'Le verre', isCorrect: false },
				{ answerText: 'Le plastique', isCorrect: true },
				{ answerText: ' L\'aluminium', isCorrect: false },
			],
		},
		

       
	];

    
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			<Container className='w-100 mx-auto'>
				<div className='boutonRetour'>
					<button className='btn btn-warning ' onClick={e => navigate('/QuizzHome')}>RETOUR A LA LISTE</button>
				</div>
				
				<h2>Les différentes poubelles</h2>
				{/* <p>{tempsRestant}</p> */}
				{showScore ? (
					<div className='score-section'>
						Vous avez bien répondu à {score} questions sur {questions.length}.
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</Container>
            
        </div>
	);
}