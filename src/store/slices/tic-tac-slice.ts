import { PayloadAction, createSlice } from '@reduxjs/toolkit';
//services
import checkWinService from '../../services/check-win.service';
//state
import defaultState from '../state/state';
//types
import type {
  IAddFieldValueToPlayerType,
  AppThunk,
  IChangeCurrentPlayerType,
  ISetWinnerType,
} from '../../types';

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
    setWinner: (state, action: PayloadAction<ISetWinnerType>) => {
      const { winner } = action.payload;
      state.winner = winner;
    },
    resetGame: (state) => {
      Object.assign(state, defaultState);
    },
  },
});

export const { addFieldValueToPlayer, changeCurrentPlayer, resetGame } = ticTacSlice.actions;

export const addFieldValueToPlayerAction =
  (action: IAddFieldValueToPlayerType): AppThunk =>
  (dispatch, getState) => {
    dispatch(ticTacSlice.actions.addFieldValueToPlayer(action));
    const winner = checkWinService.getWinner(
      getState().tictac.players[1],
      getState().tictac.players[2],
    );
    dispatch(ticTacSlice.actions.setWinner({ winner: winner }));
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
