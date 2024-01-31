import Board from "./components/Board";
import GreetingPopup from "./components/GreetingPopup";

const App = () => {
  return (
    <div className="container">
      <GreetingPopup />
      <Board>Some Board</Board>
    </div>
  );
};

export default App;
