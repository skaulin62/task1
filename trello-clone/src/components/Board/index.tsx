import React from "react";
import classes from "./Board.module.sass";

type Props = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode | null;
};

const Board = ({ children }: Props) => {
  return <div className={classes.board}>{children}</div>;
};

export default Board;
