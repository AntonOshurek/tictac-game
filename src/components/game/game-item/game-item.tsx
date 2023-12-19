import { ChangeEvent } from 'react';
//store
import { useAppSelector } from '../../../hooks/store-hooks';
import { SelectorGetFieldStatus } from '../../../store/selectors/selectors';

interface IGameItemProps {
  itemNumber: number;
  clickHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const GameItem = ({ itemNumber, clickHandler }: IGameItemProps): JSX.Element => {
  const fieldStatus = useAppSelector(SelectorGetFieldStatus(itemNumber));

  return (
    <input
      type="radio"
      className="game__item"
      onChange={clickHandler}
      value={itemNumber}
      disabled={fieldStatus}
      checked={fieldStatus}
    ></input>
  );
};

export default GameItem;
