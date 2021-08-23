import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  addValue,
  resetValue,
  activePlayer,
  resetActivePlayer,
  addPlayers,
  resetPlayers,
  score,
  resetScore,
  showModal,
} from "./game-actions";

const initialGameState = Array(9).fill(null);
const playersState = null;
const scoreState = { X: 0, O: 0 };

const squareValuesReducer = createReducer(initialGameState, {
  [addValue]: (state, { payload }) => {
    state[payload.i] = payload.value;
  },
  [resetValue]: () => initialGameState,
});

const playersReducer = createReducer(playersState, {
  [addPlayers]: (_, { payload }) => payload,
  [resetPlayers]: () => playersState,
});

const activeFirstPlayerReducer = createReducer(true, {
  [activePlayer]: (_, { payload }) => payload,
  [resetActivePlayer]: () => true,
});

const scoreReducer = createReducer(scoreState, {
  [score]: (state, { payload }) => {
    const val = state[payload] + 1;
    if (payload === "X") {
      return { ...state, X: val };
    } else {
      return { ...state, O: val };
    }
  },
  [resetScore]: () => playersState,
});

const showModalReducer = createReducer(false, {
  [showModal]: (_, { payload }) => payload,
});

export default combineReducers({
  squareValues: squareValuesReducer,
  players: playersReducer,
  activeFirstPlayer: activeFirstPlayerReducer,
  score: scoreReducer,
  showModal: showModalReducer,
});
