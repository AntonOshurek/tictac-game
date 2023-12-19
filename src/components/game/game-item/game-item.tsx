import { MouseEvent, memo, useCallback, useMemo } from 'react';
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

const GameItem = memo(({ itemNumber, clickHandler }: IGameItemProps): JSX.Element => {
  const { isChecked, playerChecked } = useAppSelector(SelectorGetFieldStatus(itemNumber));

  const memoItemNumber = useMemo(() => {
    return itemNumber;
  }, [itemNumber]);

  const isFieldCheckedClass = useMemo(() => {
    return isChecked ? 'game__item game__item--checked' : 'game__item';
  }, [isChecked]);

  const midlewareHandler = useCallback(
    (evt: MouseEvent<HTMLDivElement>): void => {
      const fieldNumber = Number(evt.currentTarget.getAttribute('data-item-number'));
      clickHandler(fieldNumber);
    },
    [clickHandler],
  );

  return (
    <div
      className={isFieldCheckedClass}
      onClick={midlewareHandler}
      data-item-number={memoItemNumber}
    >
      {playerChecked === PlayersNames.ZERO && <ZeroIcon size={ZeroCrossIconSize.MEDIUM} />}

      {playerChecked === PlayersNames.CROSS && <CrossIcon size={ZeroCrossIconSize.MEDIUM} />}
    </div>
  );
});

export default GameItem;
