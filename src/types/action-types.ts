interface IAddFieldValueToPlayerType {
  player: number;
  field: number;
}

interface IChangeCurrentPlayerType {
  newPlayer: number;
}

interface ISetWinnerType {
  winner: number;
}

export type { IAddFieldValueToPlayerType, IChangeCurrentPlayerType, ISetWinnerType };
