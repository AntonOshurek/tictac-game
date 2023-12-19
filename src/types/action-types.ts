//variables
import { PlayersNames } from '../variables/variables';
//types
import type { winnerValueType } from './state-types';

interface IAddFieldValueToPlayerType {
  player: PlayersNames;
  field: number;
}

interface IChangeCurrentPlayerType {
  newPlayer: PlayersNames;
}

interface ISetWinnerType {
  winner: winnerValueType;
}

export type { IAddFieldValueToPlayerType, IChangeCurrentPlayerType, ISetWinnerType };
