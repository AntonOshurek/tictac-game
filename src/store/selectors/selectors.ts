//types
import { RootState } from '../../types';

export const SelectorGetCurrentPlayer = (state: RootState): number => state.tictac.currentPlayer;
export const SelectorGetFieldStatus =
  (fieldNumber: number) =>
  (state: RootState): boolean =>
    state.tictac.fields[fieldNumber];
