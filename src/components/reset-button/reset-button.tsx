//store
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { SelectorGetWinner } from '../../store/selectors/selectors';
import { resetGameAction } from '../../store/slices/tic-tac-slice';
//styles
import './reset-button.scss';

const ResetButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const winner = useAppSelector(SelectorGetWinner);

  const onResetClickHandler = (): void => {
    dispatch(resetGameAction());
  };

  return (
    <button className="reset-button" type="button" onClick={onResetClickHandler}>
      {winner !== null ? 'New game' : 'Reset game'}
    </button>
  );
};

export default ResetButton;
