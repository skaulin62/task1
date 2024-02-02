import Board from "./components/Board";
import ColumnOfCards from "./components/ColumnOfCards";
import GreetingPopup from "./components/GreetingPopup";

import { Cards } from "./types/types";
import { useTrelloContext } from "./context/context";
import CardDetailsPopup from "./components/CardDetailsPopup";

const App = () => {
  const { cards, selectedCard } = useTrelloContext();
  console.log(selectedCard);
  return (
    <div className="container">
      {Object.keys(selectedCard).length !== 0 ? (
        <CardDetailsPopup card={selectedCard} />
      ) : null}
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
