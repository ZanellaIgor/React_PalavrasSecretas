import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return ( 
  <div className="start">
    <h1>Secret's Words</h1>
    <p>Clique no botão abaixo</p>
    <button onClick={startGame}>Começar jogo!</button>
  </div>
    
  );
};

export default StartScreen;