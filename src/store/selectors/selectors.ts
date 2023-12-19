//types
import { RootState, fieldItem } from '../../types';

export const SelectorGetCurrentPlayer = (state: RootState): number => state.tictac.currentPlayer;
export const SelectorGetFieldStatus =
  (fieldNumber: number) =>
  (state: RootState): fieldItem =>
    state.tictac.fields[fieldNumber];
export const SelectorGetWinner = (state: RootState): number | null => state.tictac.winner;
