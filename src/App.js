import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectors } from "./redux/nought-crosses";
import { showModal } from "./redux/nought-crosses/game-actions";

import "./App.css";
import Container from "./components/Container";
import Gamefield from "./components/Gamefield";

function App() {
  const dispatch = useDispatch();
  const isPlayers = useSelector(selectors.getPlayers);

  useEffect(() => {
    if (isPlayers) {
      dispatch(showModal(false));
    } else {
      dispatch(showModal(true));
    }
  });
  return (
    <div className="App">
      <Container>
        <Gamefield />
      </Container>
    </div>
  );
}

export default App;
