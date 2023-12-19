import { PlayersNames } from '../variables/variables';

interface fieldItem {
  isChecked: boolean;
  playerChecked: PlayersNames | null;
}

interface IStateType {
  winner: null | PlayersNames;
  currentPlayer: PlayersNames;
  players: {
    [PlayersNames.CROSS]: number[];
    [PlayersNames.ZERO]: number[];
  };
  fields: {
    [name: number]: fieldItem;
  };
}

export type { IStateType, fieldItem };
