//css
import './App.css';


//React
import { useCallback, useEffect, useState } from 'react';

//data
import {wordsList} from './data/words.js';

//components
import StartScreen from "./components/StartScreen.js";
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  
  
const [pickWord, setPickedWord] = useState("");
const [pickedCategory, setPickedCategory] = useState("");
const [letters, setLetters] = useState([]);

const [guessedLetters, setGuessedLetters] = useState([]);
const [wrongLetters, setWrongLetters] = useState([]);
const [guesses, setGesses] = useState(3);
const [score, setScore] = useState(0);


const pickWordAndCategory = () => {
  //Escolhendo a categoria random
  const categories = Object.keys(words);
  const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

  //console.log(category);

  // Escolhendo a palavra random
  const word = words[category][Math.floor(Math.random() * words[category].length)];
  
  //console.log(word);

  return {word, category}
}


  //Iniciando o Jogo
  const startGame = () => {
    
    //escolher palavra e escolher categoria
    const {word, category} = pickWordAndCategory();
    
    //Criando array com letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category);
    console.log(wordLetters);

    // Arrumando os States
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);


    setGameStage(stages[1].name)
  };


  //processo de input

const verifyLetter = () => {
  setGameStage(stages[2].name)
}

//Reiniciar Jogo

const retry = () => {
  setGameStage(stages[0].name)
}

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game 
        verifyLetter={verifyLetter}
        pickWord={pickWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score} />}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
    );
}

export default App;
