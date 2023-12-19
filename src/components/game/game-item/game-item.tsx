import { MouseEvent } from 'react';
//store
import { useAppSelector } from '../../../hooks/store-hooks';
import { SelectorGetFieldStatus } from '../../../store/selectors/selectors';
//components
import { CrossIcon, ZeroIcon } from '../../';
//variables
import { PlayersNames, ZeroCrossIconSize } from '../../../variables/variables';

interface IGameItemProps {
  itemNumber: number;
  clickHandler: (fieldNumber: number) => void;
}

const GameItem = ({ itemNumber, clickHandler }: IGameItemProps): JSX.Element => {
  const { isChecked, playerChecked } = useAppSelector(SelectorGetFieldStatus(itemNumber));
  const isFieldCheckedClass = isChecked ? 'game__item game__item--checked' : 'game__item';

  const midlewareHandler = (evt: MouseEvent<HTMLDivElement>): void => {
    const fieldNumber = Number(evt.currentTarget.getAttribute('data-item-number'));
    clickHandler(fieldNumber);
  };

  return (
    <div className={isFieldCheckedClass} onClick={midlewareHandler} data-item-number={itemNumber}>
      {playerChecked === PlayersNames.ZERO && <ZeroIcon size={ZeroCrossIconSize.MEDIUM} />}

      {playerChecked === PlayersNames.CROSS && <CrossIcon size={ZeroCrossIconSize.MEDIUM} />}
    </div>
  );
};

export default GameItem;
