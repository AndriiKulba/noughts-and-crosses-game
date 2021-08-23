import { createAction } from "@reduxjs/toolkit";

export const addValue = createAction("game/addvalues");
export const resetValue = createAction("game/resetvalues");

export const addPlayers = createAction("game/addplayers");
export const resetPlayers = createAction("game/resetplayers");

export const activePlayer = createAction("game/activeplayer");
export const resetActivePlayer = createAction("game/resetactiveplayer");

export const score = createAction("game/score");
export const resetScore = createAction("game/resetscore");

export const showModal = createAction("game/Modal");
