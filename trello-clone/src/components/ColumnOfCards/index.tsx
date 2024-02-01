import classes from "./ColumnOfCards.module.sass";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { FC, useEffect, useRef, useState } from "react";
import { Card, Cards } from "../../types/types";
import CardItem from "../Card";
import { useTrelloContext } from "../../context/context";

interface Props {
  card: Cards;
}

const ColumnOfCards: FC<Props> = ({ card }) => {
  const { changeTitleCards, addItem } = useTrelloContext();

  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [newCardTitle, setNewCardTitle] = useState<string>("");
  const [newColTitle, setNewColTitle] = useState<string>("");
  const [isEditColTitle, setIsEditColTitle] = useState<boolean>(false);
  const inputColRef = useRef<HTMLDivElement | null>(null);
  const inputNewCardTitleRef = useRef<HTMLDivElement | null>(null);

  const handleChangeTitleCol = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditColTitle(!isEditColTitle);
      changeTitleCards(newColTitle, card.title);
      setNewColTitle("");
    }
  };

  const handleChangeNewCardTitle = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      setIsAdding(!isEditColTitle);

      clickAddItem();
      setNewCardTitle("");
    }
  };

  useEffect(() => {
    const clickOutInputCol = (e: MouseEvent) => {
      if (
        inputColRef.current &&
        !e.composedPath().includes(inputColRef.current)
      ) {
        setIsEditColTitle(false);
        setNewColTitle("");
      }
      if (
        inputNewCardTitleRef.current &&
        !e.composedPath().includes(inputNewCardTitleRef.current)
      ) {
        setIsAdding(false);
        setNewCardTitle("");
      }
    };
    document.addEventListener("click", clickOutInputCol);
    return () => {
      document.removeEventListener("click", clickOutInputCol);
    };
  }, []);

  const clickAddItem = () => {
    if (isAdding) {
      const newCard = {
        name: newCardTitle,
        author: window.localStorage.getItem("trelloUsername"),
        descr: "",
        comments: [],
        countComments: 0,
      };
      console.log(newCard);
      addItem(newCard, card);
    } else {
    }
    setNewCardTitle("");
    setIsAdding(!isAdding);
  };
  return (
    <div className={classes.columnCards}>
      <div ref={inputColRef} className={classes.title}>
        <h3
          onClick={() => setIsEditColTitle(!isEditColTitle)}
          hidden={isEditColTitle}
        >
          {card.title}
        </h3>
        <Input
          onKeyDown={(e) => handleChangeTitleCol(e)}
          placeholder="Type new title"
          onChange={(e) => setNewColTitle(e.target.value)}
          value={newColTitle}
          hidden={!isEditColTitle}
          clearValue={() => setNewColTitle("")}
        />
      </div>
      <div className={classes.listCards}>
        {card.item.map((item: Card, index: number) => (
          <CardItem key={index} item={item} />
        ))}
      </div>
      <div
        ref={inputNewCardTitleRef}
        style={{ display: "flex", gap: "5px", flexDirection: "column" }}
      >
        <Input
          onKeyDown={handleChangeNewCardTitle}
          hidden={!isAdding}
          value={newCardTitle}
          clearValue={() => setNewCardTitle("")}
          placeholder="Type title of new cards"
          onChange={(e) => setNewCardTitle(e.target.value)}
        />
        <Button onClick={() => clickAddItem()}>Add card</Button>
      </div>
    </div>
  );
};

export default ColumnOfCards;
