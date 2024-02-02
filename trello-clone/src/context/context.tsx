import { createContext, useContext, useState } from "react";
import { Card, Cards } from "../types/types";

interface TypeContext {
  cards: Cards[];
  selectedCard: Card;
  setSelectedCard: (item: Card) => void;
  changeCardsTitle: (title: string, lastTitle: string) => void;
  addCardsItem: (item: Card, cards: Cards) => void;
}

export const TrelloContext = createContext<TypeContext>({} as TypeContext);
export const useTrelloContext = () => useContext(TrelloContext);

type Props = {
  children?: React.ReactNode;
};

export const TrelloContextProvider = (props: Props) => {
  const [cards, setCards] = useState<Cards[]>([
    {
      title: "TODO",
      item: [
        {
          name: "Name 1",
          author: "Author 1",
          descr: "",
          comments: [
            {
              author: "Author 1",
              content: "Nice",
            },
            {
              author: "Author 2",
              content: "GOOD",
            },
          ],
          countComments: 2,
        },
      ],
    },
    {
      title: "In Progress",
      item: [
        {
          name: "Name 1",
          author: "Author 1",
          descr: "",
          comments: [
            {
              author: "Author 1",
              content: "Nice",
            },
            {
              author: "Author 2",
              content: "GOOD",
            },
          ],
          countComments: 2,
        },
        {
          name: "Name 2",
          author: "Author 1",
          descr: "",
          comments: [
            {
              author: "Author 1",
              content: "Nice",
            },
            {
              author: "Author 2",
              content: "GOOD",
            },
          ],
          countComments: 0,
        },
        {
          name: "Name 2",
          author: "Author 1",
          descr: "",
          comments: [
            {
              author: "Author 1",
              content: "Nice",
            },
            {
              author: "Author 2",
              content: "GOOD",
            },
          ],
          countComments: 0,
        },
      ],
    },
    {
      title: "Testing",
      item: [
        {
          name: "Name 1",
          author: "Author 1",
          descr: "",
          comments: [
            {
              author: "Author 1",
              content: "Nice",
            },
            {
              author: "Author 2",
              content: "GOOD",
            },
          ],
          countComments: 2,
        },
      ],
    },
    {
      title: "Done",
      item: [
        {
          name: "Name 1",
          author: "Author 1",
          descr: "",
          comments: [],
          countComments: 0,
        },
      ],
    },
  ]);
  const [selectedCard, setSelectedCard] = useState<Card>({} as Card);

  const changeCardsTitle = (title: string, lastTitle: string) => {
    const includedCount = cards.reduce((acc: number, card: Cards) => {
      if (card.title.toLowerCase() === title.toLowerCase()) acc += 1;
      return acc;
    }, 0);
    console.log(includedCount);
    if (title && lastTitle && includedCount === 0) {
      setCards((prev) =>
        prev.map((card: Cards): Cards => {
          if (card.title === lastTitle) {
            return { ...card, title: title };
          }
          return card;
        })
      );
      console.log(cards);
    }
  };
  const addCardsItem = (item: Card, cards: Cards) => {
    const includedCount = cards.item.reduce((acc: number, itemCard: Card) => {
      if (item.name.toLowerCase() === itemCard.name.toLowerCase()) acc += 1;
      return acc;
    }, 0);
    if (item.name !== "" && cards && includedCount === 0) {
      setCards((prev) =>
        prev.map((card: Cards): Cards => {
          if (cards.title === card.title) {
            return {
              title: cards.title,
              item: [...cards.item, item],
            };
          }
          return card;
        })
      );
    }
    console.log(cards);
  };

  return (
    <TrelloContext.Provider
      value={{
        changeCardsTitle,
        selectedCard,
        setSelectedCard,
        addCardsItem,
        cards,
      }}
    >
      {props.children}
    </TrelloContext.Provider>
  );
};
