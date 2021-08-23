import { createSelector } from "@reduxjs/toolkit";
const getSquaresValue = ({ state }) => {
  return state.squareValues;
};

const isActiveFirstPlayer = ({ state }) => {
  return state.activeFirstPlayer;
};
const getShowModal = ({ state }) => state.showModal;
const getPlayers = ({ state }) => state.players;
const getScore = ({ state }) => state.score;

const getCalculateWiner = createSelector([getSquaresValue], (squareValues) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squareValues[a] &&
      squareValues[a] === squareValues[b] &&
      squareValues[a] === squareValues[c]
    ) {
      console.log(squareValues[a]);
      return [squareValues[a], i];
    }
  }
  return null;
});

export default {
  getSquaresValue,
  isActiveFirstPlayer,
  getShowModal,
  getPlayers,
  getScore,
  getCalculateWiner,
};
