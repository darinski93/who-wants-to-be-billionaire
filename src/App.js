import { useEffect, useState } from 'react';
import './App.css';
import { Questions } from './components/Questions/Questions';
import { Prices } from './components/Pricing/Pricing';



function App() {

  const [question, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=15')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
  }, [])


  return (
    <div className="App">

      <Questions />
      <Prices />

    </div>
  );
}

export default App;
