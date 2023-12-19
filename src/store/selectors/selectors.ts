//types
import { RootState } from '../../types';

export const SelectorGetCurrentUser = (state: RootState): number => state.tictac.currentPlayer;
export const SelectorGetFieldStatus =
  (fieldNumber: number) =>
  (state: RootState): boolean =>
    state.tictac.fields[fieldNumber];
