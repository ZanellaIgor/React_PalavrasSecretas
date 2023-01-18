import { useState } from "react";
import "./Game.css";

const Game = ({verifyLetter, 
    pickedword,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
}) => { 
     const [letter, setLetter] = useState("");
  return (
    <div className="game">
      <p1 className="points">
        <span>Pontuação: {score}</span>
      </p1>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
        guessedLetters.includes(letter) ? (
          <span key={i} className="letter">{letter}</span>
        ) : (
          <span key={i} className="blankSquare"></span>
        ))}
      
      </div>
      <div className="letterContainer">
        <p>Tente a sorte!</p>
      <form> {/*aqui esta parado*/}
        <input 
        type="text" 
        name="letter" 
        maxLenght='1' required 
        onChange={(e) => setLetter(e.target.value)}
        value={letter}/>
        <button>Jogar!</button>
      </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter,i)=> (
          <span key={i}>{letter},</span>
        ))}
      </div>
      
      
    </div>
  )
}

export default Game;
