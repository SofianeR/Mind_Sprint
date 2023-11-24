import "./App.css";
import Logo from "./assets/MindSprintLogo.png";

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="" />
      <h1>Mind Sprint</h1>

      <div className="rules-container">
        <h2>Rules</h2>

        <p>
          Immerse yourself in a world where creativity comes to life and design
          becomes a visual adventure game!
        </p>

        <p>
          Welcome to MIND SPRINT, where every stroke, color and shape builds
          your path to victory! Choose an object to use as a pawn to start the
          game. To start the game, each participant stands on the starting
          square.
        </p>

        <p>
          To advance, draw a card. Each card is made up of five different
          questions, so you can choose the question you want according to your
          level of knowledge. You'll have 30 seconds to answer. The cards cover
          four different themes: Artistic Movement, Brand Evolution, Different
          Artists, History of Design.
        </p>

        <p>
          The higher the question you choose, the more points you'll earn. You
          advance in the game according to the points you earn for the question
          you answer. One point moves you forward one square, five points moves
          you forward five squares.
        </p>

        <p>The aim is to reach the finish line first!</p>

        <p>3,2,1 PLAY</p>
      </div>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/15KbjuiPR0g?si=94W7Llrx4C4lTMC1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default App;
