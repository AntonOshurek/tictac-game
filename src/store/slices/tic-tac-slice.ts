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
      state.fields[field] = true;
    },
    changeCurrentPlayer: (state, action: PayloadAction<IChangeCurrentPlayerType>) => {
      const { newPlayer } = action.payload;
      state.currentPlayer = newPlayer;
    },
  },
});

export const { addFieldValueToPlayer } = ticTacSlice.actions;

export const addFieldValueToPlayerAction =
  (action: IAddFieldValueToPlayerType): AppThunk =>
  (dispatch) => {
    dispatch(ticTacSlice.actions.addFieldValueToPlayer(action));
  };

export default ticTacSlice.reducer;
