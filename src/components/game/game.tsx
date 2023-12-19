//store
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { SelectorGetCurrentPlayer, SelectorGetWinner } from '../../store/selectors/selectors';
import {
  addFieldValueToPlayerAction,
  changeCurrentPlayerAction,
} from '../../store/slices/tic-tac-slice';
//variables
import { PlayersNames } from '../../variables/variables';
//components
import GameWinnerPopup from './game-winner/game-winner';
import GameItem from './game-item/game-item';
//styles
import './game.scss';

const Game = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentPlayer = useAppSelector(SelectorGetCurrentPlayer);
  const winner = useAppSelector(SelectorGetWinner);
  const nextPlayer = currentPlayer === PlayersNames.CROSS ? PlayersNames.ZERO : PlayersNames.CROSS;

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

  return (
    <div className="game">
      {renderGameItems()}
      {winner !== null && <GameWinnerPopup winner={winner} />}
    </div>
  );
};

export default Game;
