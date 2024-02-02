import { FC, useEffect } from "react";
import classes from "./CardDetailsPopup.module.sass";
import { Card } from "../../types/types";
import IconCloseButton from "../UI/IconCloseButton";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Comment from "../Comment";
import { useTrelloContext } from "../../context/context";

interface Props {
  card: Card;
}

const CardDetailsPopup: FC<Props> = ({ card }) => {
  const { setSelectedCard } = useTrelloContext();
  useEffect(() => {
    const keyBoardHandler = (e: KeyboardEventInit) => {
      if (e.key === "Escape") {
        setSelectedCard({} as Card);
      }
      console.log(1);
    };
    document.addEventListener("keydown", keyBoardHandler, true);
    return () => document.removeEventListener("keydown", keyBoardHandler, true);
  }, []);

  return (
    <div className={classes.overlay}>
      <div className={classes.cardDetail}>
        <div className={classes.closeBlock}>
          <IconCloseButton onClick={() => setSelectedCard({} as Card)} />
        </div>
        <span className={classes.colInfo}>Column: 13123 | Author: Name</span>

        <div className={classes.title}>
          <div style={{ width: "400px" }}>
            <h3 style={{ paddingLeft: "10px" }}>
              TITLEsdasadsssssssssssssssssssssss
            </h3>
            {/* <Input onChange={() => {}} value="" /> */}
          </div>
        </div>
        <button className={classes.deleteCard}>Delete</button>
        <div className={classes.descr}>
          <h3 className={classes.descrTitle}>Description</h3>
          <textarea
            className={classes.descrText}
            value="dddddddddddddddddsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dasda sdsdasdasdddddddddddddddddddddd"
            onChange={() => {}}
          />
          <Button>Save</Button>
        </div>
        <div className={classes.comments}>
          <h3 className={classes.descrTitle}>Comments</h3>
          <div className={classes.addComment}>
            <div className={classes.userIcon}>
              <img src="https://trello-members.s3.amazonaws.com/65b89f439f456aba16f40989/3b4ea385fc3f4513edce3dad4a12061a/170.png" />
            </div>
            <div className={classes.blockInfo}>
              <Input
                placeholder="Typing something"
                value=""
                onChange={() => {}}
              />
              <div className={classes.wrapperBtn}>
                <Button>Post</Button>
              </div>
            </div>
          </div>
          <div className={classes.split}></div>
          <div className={classes.listComments}>
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPopup;
