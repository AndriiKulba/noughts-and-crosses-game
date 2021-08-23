import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors } from "../../redux/nought-crosses";
import {
  score,
  resetActivePlayer,
  resetValue,
} from "../../redux/nought-crosses/game-actions";
import s from "./Playerboard.module.css";

export default function Playerboard() {
  const dispatch = useDispatch();
  const Players = useSelector(selectors.getPlayers);
  const isActive = useSelector(selectors.isActiveFirstPlayer);
  const scorePlayers = useSelector(selectors.getScore);
  const winner = useSelector(selectors.getCalculateWiner);

  const onClickBtn = () => {
    dispatch(score(winner[0]));
    dispatch(resetValue());
    dispatch(resetActivePlayer());
  };
  return (
    <>
      {Players ? (
        <div className={s.Playerboard}>
          {winner ? (
            <div className={s.winnerPlayer}>
              <h4>Winner:</h4>
              <div>{winner[0] === "X" ? Players[0] : Players[1]}</div>
              <button onClick={onClickBtn}>Next game</button>
            </div>
          ) : (
            <div className={s.activePlayer}>
              <h4>Active player:</h4>
              <div>{isActive ? `${Players[0]} - X` : `${Players[1]} - O`}</div>
            </div>
          )}
          <div className={s.Score}>
            <h4>Score:</h4>
            <div>
              {" "}
              {Players[0]} : {scorePlayers.X}
            </div>
            <div>
              {" "}
              {Players[1]} : {scorePlayers.O}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
