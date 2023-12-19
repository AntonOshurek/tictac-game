//store
import { useAppDispatch } from '../../hooks/store-hooks';
import { resetGameAction } from '../../store/slices/tic-tac-slice';
//styles
import './reset-button.scss';

const ResetButton = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onResetClickHandler = (): void => {
    dispatch(resetGameAction());
  };

  return (
    <button className="reset-button" type="button" onClick={onResetClickHandler}>
      Reset game
    </button>
  );
};

export default ResetButton;
