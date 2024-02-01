import classes from "./ColumnOfCards.module.sass";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { FC, useState } from "react";

interface Props {
  title: string;
}

const ColumnOfCards: FC<Props> = ({ title }) => {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [newCardTitle, setNewCardTitle] = useState<string>("");
  const [isEditCurrCardTitle, setIsEditCurrCardTitle] =
    useState<boolean>(false);

  return (
    <div className={classes.columnCards}>
      <div className={classes.title}>
        <h3>{title}</h3>
        <input onChange={() => {}} value="I'm hidden:)" hidden />
      </div>
      <div className={classes.listCards}>
        {/* cards */}
        dasd<div>dasd</div>
        dasd<div>dasd</div>
        dasd<div>dasd</div>
        dasd<div>dasd</div>
        dasd<div>dasd</div>
        dasd<div>dasd</div>
        dasd<div>dasd</div>
        dasd<div>dasd</div>
        dasd<div>dasd</div>dasd<div>dasd</div>dasd<div>dasd</div>dasd
        <div>dasd</div>dasd<div>dasd</div>dasd<div>dasd</div>dasd<div>dasd</div>
        dasd<div>dasd</div>dasd<div>dasd</div>dasd<div>dasd</div>
      </div>
      <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
        <Input
          hidden={!isAdding}
          value={newCardTitle}
          clearValue={() => setNewCardTitle("")}
          placeholder="Typing about new cards"
          onChange={(e) => setNewCardTitle(e.target.value)}
        />
        <Button onClick={() => setIsAdding(!isAdding)}>Add card</Button>
      </div>
    </div>
  );
};

export default ColumnOfCards;
