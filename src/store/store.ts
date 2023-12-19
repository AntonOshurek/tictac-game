import { configureStore } from '@reduxjs/toolkit';
import ticTacSlice from './slices/tic-tac-slice';

export const store = configureStore({
  reducer: {
    tictac: ticTacSlice,
  },
});
