interface fieldItem {
  isChecked: boolean;
  playerChecked: number | null;
}

interface IStateType {
  winner: null | number;
  currentPlayer: number;
  players: {
    [name: number]: number[];
  };
  fields: {
    [name: number]: fieldItem;
  };
}

export type { IStateType, fieldItem };
