import { configureStore } from "@reduxjs/toolkit";

import Reducer from "./nought-crosses/game-reducer";

const store = configureStore({
  reducer: {
    state: Reducer,
  },
});

export default store;
