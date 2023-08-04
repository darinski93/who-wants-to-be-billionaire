import { useContext } from "react";
import { QuestionsContext } from "../../Contexts/QuestionsContext";


export const Questions = () => {

    const { questions,
        currentQuestion,
        playAgain,
        handleOptionsClick,
        gameOver,
    } = useContext(QuestionsContext)


    if (!questions || questions.length === 0) {
        return <div className="loading">Loading...</div>
    }

    const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer,].sort(() => Math.random() - 0.5)

    return (
        <div className="question-box">
            {gameOver ? (
                <div className="game-over">
                    <h3> Game Over <span className="sad-emoji">😢</span></h3>
                    <button className="play-again" onClick={playAgain}>Play Again</button>
                </div>
            ) : (
                <>
                    <h3 className="question-text">{currentQuestion.question}</h3>
                    <ul className="options">
                        {allAnswers.map((answer, answerIndex) => (
                            <li
                                key={answerIndex}
                                className={`answer-box`}
                                onClick={() => handleOptionsClick(answer)}
                            >
                                <span className="letter">{String.fromCharCode(65 + answerIndex)}: </span>
                                {answer}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
};
