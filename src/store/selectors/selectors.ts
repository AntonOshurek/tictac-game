//variables
import { PlayersNames } from '../../variables/variables';
//types
import type { RootState, IFieldItemType, winnerValueType } from '../../types';

export const SelectorGetCurrentPlayer = (state: RootState): PlayersNames =>
  state.tictac.currentPlayer;
export const SelectorGetFieldStatus =
  (fieldNumber: number) =>
  (state: RootState): IFieldItemType =>
    state.tictac.fields[fieldNumber];
export const SelectorGetWinner = (state: RootState): winnerValueType => state.tictac.winner;
