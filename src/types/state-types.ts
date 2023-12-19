import { PlayersNames, REMIS_WINNER } from '../variables/variables';

interface IFieldItemType {
  isChecked: boolean;
  playerChecked: PlayersNames | null;
}

interface IFieldsType {
  [name: number]: IFieldItemType;
}

type winnerValueType = PlayersNames | null | typeof REMIS_WINNER;

interface IStateType {
  winner: winnerValueType;
  currentPlayer: PlayersNames;
  players: {
    [PlayersNames.CROSS]: number[];
    [PlayersNames.ZERO]: number[];
  };
  fields: IFieldsType;
}

export type { IStateType, IFieldItemType, IFieldsType, winnerValueType };
