import Board from "./components/Board";
import ColumnOfCards from "./components/ColumnOfCards";
import GreetingPopup from "./components/GreetingPopup";

import { Cards } from "./types/types";
import { useTrelloContext } from "./context/context";

const App = () => {
  const { cards } = useTrelloContext();

  return (
    <div className="container">
      <GreetingPopup />
      <Board>
        {cards.map((card: Cards, index: number) => (
          <ColumnOfCards key={index} card={card} />
        ))}
      </Board>
    </div>
  );
};

export default App;
