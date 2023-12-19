//types
import { IStateType } from '../../types';

const defaultState: IStateType = {
  winner: null,
  currentPlayer: 1,
  players: {
    1: [],
    2: [],
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
