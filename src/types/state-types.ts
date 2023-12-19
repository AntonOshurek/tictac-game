interface IStateType {
  winner: null | number;
  currentPlayer: number;
  players: {
    [name: number]: number[];
  };
  fields: {
    [name: number]: boolean;
  };
}

export type { IStateType };
