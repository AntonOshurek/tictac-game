//variables
import { PlayersNames } from '../variables/variables';

interface IAddFieldValueToPlayerType {
  player: PlayersNames;
  field: number;
}

interface IChangeCurrentPlayerType {
  newPlayer: PlayersNames;
}

interface ISetWinnerType {
  winner: PlayersNames | null;
}

export type { IAddFieldValueToPlayerType, IChangeCurrentPlayerType, ISetWinnerType };
