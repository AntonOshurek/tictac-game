//store
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { SelectorGetCurrentPlayer } from '../../store/selectors/selectors';
import {
  addFieldValueToPlayerAction,
  changeCurrentPlayerAction,
} from '../../store/slices/tic-tac-slice';
//components
import GameItem from './game-item/game-item';
//styles
import './game.scss';

const Game = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentPlayer = useAppSelector(SelectorGetCurrentPlayer);
  const nextPlayer = currentPlayer === 1 ? 2 : 1;

  const onGaneItemChangeHandler = (fieldNumber: number): void => {
    dispatch(addFieldValueToPlayerAction({ player: currentPlayer, field: +fieldNumber }));
    dispatch(changeCurrentPlayerAction({ newPlayer: nextPlayer }));
  };

  const renderGameItems = () => {
    const items = [];
    for (let i = 1; i <= 9; i++) {
      items.push(<GameItem key={i} itemNumber={i} clickHandler={onGaneItemChangeHandler} />);
    }
    return items;
  };

  return <div className="game">{renderGameItems()}</div>;
};

export default Game;
