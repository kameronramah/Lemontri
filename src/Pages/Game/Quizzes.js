import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function App() {
	const questions = [
		{
			questionText: 'Dans quelle poubelle jette t-on les bouteilles en plastique ?',
			answerOptions: [
				{ answerText: 'Poubelle verte', isCorrect: false },
				{ answerText: 'Poubelle bleu', isCorrect: false },
				{ answerText: 'Poubelle jaune', isCorrect: true },
				{ answerText: 'Poubelle verte', isCorrect: false },
			],
		},
        {
			questionText: 'Dans quelle poubelle jette t-on les bouteilles en plastique ?',
			answerOptions: [
				{ answerText: 'Poubelle verte', isCorrect: false },
				{ answerText: 'Poubelle bleu', isCorrect: false },
				{ answerText: 'Poubelle jaune', isCorrect: true },
				{ answerText: 'Poubelle verte', isCorrect: false },
			],
		},
        {
			questionText: 'Dans quelle poubelle jette t-on les bouteilles en plastique ?',
			answerOptions: [
				{ answerText: 'Poubelle verte', isCorrect: false },
				{ answerText: 'Poubelle bleu', isCorrect: false },
				{ answerText: 'Poubelle jaune', isCorrect: true },
				{ answerText: 'Poubelle verte', isCorrect: false },
			],
		},
        {
			questionText: 'Dans quelle poubelle jette t-on les bouteilles en plastique ?',
			answerOptions: [
				{ answerText: 'Poubelle verte', isCorrect: false },
				{ answerText: 'Poubelle bleu', isCorrect: false },
				{ answerText: 'Poubelle jaune', isCorrect: true },
				{ answerText: 'Poubelle verte', isCorrect: false },
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