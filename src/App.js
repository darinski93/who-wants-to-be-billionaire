import { useEffect, useState } from 'react';
import { Questions } from './components/Questions/Questions';
import { Prices } from './components/Pricing/Pricing';
import Sound from './components/Sound/Sound';
import { QuestionsContext } from './Contexts/QuestionsContext';


function App() {

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=14&difficulty=easy&type=multiple')
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
      .catch((error) => console.log(error))
  }, [])

  const currentQuestion = questions[currentIndex]

  const handleOptionsClick = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    } else {
      setGameOver(true)
    }
  }

  const playAgain = () => {
    setCurrentIndex(0)
    setGameOver(false)
  }


  return (
    <div className="App">

      <QuestionsContext.Provider value={{
        questions,
        currentIndex,
        setCurrentIndex,
        gameOver,
        setGameOver,
        playAgain,
        handleOptionsClick,
        currentQuestion
      }}>

        <Questions />
        <Prices />
      </QuestionsContext.Provider>
      <Sound />



    </div>
  );
}

export default App;
