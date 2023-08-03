import { useEffect, useState } from 'react';
import './App.css';
import { Questions } from './components/Questions/Questions';



function App() {

  const [question, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=15')
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
  }, [])


  return (
    <div className="App">

      <Questions />

    </div>
  );
}

export default App;
