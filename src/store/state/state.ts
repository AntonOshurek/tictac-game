//types
import { IStateType } from '../../types';

const defaultState: IStateType = {
  winner: null,
  players: {
    1: [],
    2: [],
  },
  fields: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  },
};

export default defaultState;
