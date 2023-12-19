import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { RootState, AppThunk } from '../store';
//state
import defaultState from '../state/state';
//types
import type { IAddFieldValueToPlayerType, AppThunk, IChangeCurrentPlayerType } from '../../types';

export const ticTacSlice = createSlice({
  name: 'tictac',
  initialState: defaultState,

  reducers: {
    addFieldValueToPlayer: (state, action: PayloadAction<IAddFieldValueToPlayerType>) => {
      const { player, field } = action.payload;

      state.players[player].push(field);
      state.fields[field] = { isChecked: true, playerChecked: player };
    },
    changeCurrentPlayer: (state, action: PayloadAction<IChangeCurrentPlayerType>) => {
      const { newPlayer } = action.payload;
      state.currentPlayer = newPlayer;
    },
    resetGame: (state) => {
      Object.assign(state, defaultState);
    },
  },
});

export const { addFieldValueToPlayer, changeCurrentPlayer, resetGame } = ticTacSlice.actions;

export const addFieldValueToPlayerAction =
  (action: IAddFieldValueToPlayerType): AppThunk =>
  (dispatch) => {
    dispatch(ticTacSlice.actions.addFieldValueToPlayer(action));
  };

export const changeCurrentPlayerAction =
  (action: IChangeCurrentPlayerType): AppThunk =>
  (dispatch) => {
    dispatch(ticTacSlice.actions.changeCurrentPlayer(action));
  };

export const resetGameAction = (): AppThunk => (dispatch) => {
  dispatch(ticTacSlice.actions.resetGame());
};

export default ticTacSlice.reducer;
