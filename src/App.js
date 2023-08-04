import { useEffect, useState } from 'react';
import './App.css';
import { Questions } from './components/Questions/Questions';
import { Prices } from './components/Pricing/Pricing';
import Sound from './components/Sound/Sound';




function App() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=15&type=multiple')
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
      .catch((error) => console.log(error))
  }, [])


  return (
    <div className="App">

      <Questions questions={questions} />
      <Prices />
      <Sound />

    </div>
  );
}

export default App;
