import { addValue, addPlayers } from "./game-actions";

const addSquareValue = (i, value) => (dispatch) => {
  dispatch(addValue(i, value));
};
const addPlayersName = (player1, player2) => (dispatch) => {
  dispatch(addPlayers(player1, player2));
};
export default { addSquareValue, addPlayersName };
