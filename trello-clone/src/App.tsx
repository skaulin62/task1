import { useState } from "react";
import Board from "./components/Board";
import ColumnOfCards from "./components/ColumnOfCards";
import GreetingPopup from "./components/GreetingPopup";
import { map } from "jquery";

interface Card {
  name: string;
  author: string;
  descr: string;
  comments: {
    author: string;
    content: string;
  }[];
}

interface Cards {
  title: string;
  item: Card[];
}

const App = () => {
  const [cards, setCards] = useState<Cards[]>([
    {
      title: "TODO",
      item: [],
    },
    {
      title: "In Progress",
      item: [],
    },
    {
      title: "Testing",
      item: [],
    },
    {
      title: "Done",
      item: [],
    },
  ]);

  return (
    <div className="container">
      <GreetingPopup />
      <Board>
        {cards.map((card: Cards, index: number) => (
          <ColumnOfCards key={index} title={card.title} />
        ))}
      </Board>
    </div>
  );
};

export default App;
