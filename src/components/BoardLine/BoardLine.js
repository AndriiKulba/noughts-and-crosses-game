import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors } from "../../redux/nought-crosses";

export default function BoardLine() {
  const winner = useSelector(selectors.getCalculateWiner);
  let addClass = null;
  if (winner) {
    addClass = `winnerLine L${winner[1]}`;
  }

  return (
    <>
      <span className="lineVertical"></span>
      <span className="lineVertical secondaryV"></span>
      <span className="lineGorisontal"></span>
      <span className="lineGorisontal secondaryG"></span>
      <span className={addClass}></span>
    </>
  );
}
