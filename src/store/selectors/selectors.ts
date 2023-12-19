//types
import { RootState, fieldItem } from '../../types';
import { PlayersNames } from '../../variables/variables';

export const SelectorGetCurrentPlayer = (state: RootState): PlayersNames =>
  state.tictac.currentPlayer;
export const SelectorGetFieldStatus =
  (fieldNumber: number) =>
  (state: RootState): fieldItem =>
    state.tictac.fields[fieldNumber];
export const SelectorGetWinner = (state: RootState): PlayersNames | null => state.tictac.winner;
