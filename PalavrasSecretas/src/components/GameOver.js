import "./GameOver.css";

const GameOver = ({retry}) => {
  return (
    <div> 
      <h1>Você Perdeu!</h1>
      <button onClick={retry}>Resetar Game</button>
    </div>
  )
}

export default GameOver;