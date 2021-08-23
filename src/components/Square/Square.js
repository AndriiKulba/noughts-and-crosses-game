import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors, operations } from "../../redux/nought-crosses";
import { activePlayer } from "../../redux/nought-crosses/game-actions";
import s from "./Square.module.css";

export default function Square() {
  const dispatch = useDispatch();
  const board = useSelector(selectors.getSquaresValue);
  const isActiveFirstPlayer = useSelector(selectors.isActiveFirstPlayer);

  const handleClick = (i) => {
    const value = isActiveFirstPlayer ? "X" : "O";
    dispatch(operations.addSquareValue({ i, value }));
    dispatch(activePlayer(!isActiveFirstPlayer));
  };
  return (
    <>
      {board.map((square, i) => {
        return (
          <button key={i} className={s.Square} onClick={() => handleClick(i)}>
            {square}
          </button>
        );
      })}
    </>
  );
}
