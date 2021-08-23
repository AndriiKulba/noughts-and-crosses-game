import React from "react";
import s from "./Board.module.css";
import Square from "../Square";
import BoardLine from "../BoardLine";

export default function Board() {
  return (
    <div className={s.Board}>
      <Square />
      <BoardLine />
    </div>
  );
}
