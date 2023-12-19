import type { IStateType, IFieldItemType, IFieldsType, winnerValueType } from './state-types';
import type {
  IAddFieldValueToPlayerType,
  IChangeCurrentPlayerType,
  ISetWinnerType,
} from './action-types';
import { AppThunk, AppDispatch, RootState } from './store-types';

export type {
  IStateType,
  IAddFieldValueToPlayerType,
  AppThunk,
  AppDispatch,
  RootState,
  IChangeCurrentPlayerType,
  IFieldItemType,
  ISetWinnerType,
  IFieldsType,
  winnerValueType,
};
