//types
import { IStateType } from '../../types';
//variables
import { PlayersNames } from '../../variables/variables';

const defaultState: IStateType = {
  winner: null,
  currentPlayer: PlayersNames.ZERO,
  players: {
    [PlayersNames.ZERO]: [],
    [PlayersNames.CROSS]: [],
  },
  fields: {
    1: { isChecked: false, playerChecked: null },
    2: { isChecked: false, playerChecked: null },
    3: { isChecked: false, playerChecked: null },
    4: { isChecked: false, playerChecked: null },
    5: { isChecked: false, playerChecked: null },
    6: { isChecked: false, playerChecked: null },
    7: { isChecked: false, playerChecked: null },
    8: { isChecked: false, playerChecked: null },
    9: { isChecked: false, playerChecked: null },
  },
};

export default defaultState;
