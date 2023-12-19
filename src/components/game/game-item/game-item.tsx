import { MouseEvent } from 'react';
//store
import { useAppSelector } from '../../../hooks/store-hooks';
import { SelectorGetFieldStatus } from '../../../store/selectors/selectors';

interface IGameItemProps {
  itemNumber: number;
  clickHandler: (fieldNumber: number) => void;
}

const GameItem = ({ itemNumber, clickHandler }: IGameItemProps): JSX.Element => {
  const { isChecked, playerChecked } = useAppSelector(SelectorGetFieldStatus(itemNumber));
  const isFieldCheckedClass = isChecked ? 'game__item game__item--checked' : 'game__item';

  const midlewareHandler = (evt: MouseEvent<HTMLDivElement>): void => {
    console.log(evt.currentTarget.getAttribute('data-item-number'));

    const fieldNumber = Number(evt.currentTarget.getAttribute('data-item-number'));
    clickHandler(fieldNumber);
  };

  return (
    <div className={isFieldCheckedClass} onClick={midlewareHandler} data-item-number={itemNumber}>
      {playerChecked === 1 && (
        <svg className="game__player-icon" aria-label="O" role="img" viewBox="0 0 128 128">
          <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"></path>
        </svg>
      )}

      {playerChecked === 2 && (
        <svg className="game__player-icon" aria-label="X" role="img" viewBox="0 0 128 128">
          <path d="M16,16L112,112"></path>
          <path d="M112,16L16,112"></path>
        </svg>
      )}
    </div>
  );
};

export default GameItem;
