//store
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { SelectorGetCurrentPlayer, SelectorGetWinner } from '../../store/selectors/selectors';
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
  const winner = useAppSelector(SelectorGetWinner);
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

  return (
    <div className="game">
      {renderGameItems()}
      {winner !== null && (
        <div className="game__winner">
          <p className="game__winner-name">
            {winner === 1 ? (
              <svg className="game__winner-icon" aria-label="O" role="img" viewBox="0 0 128 128">
                <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"></path>
              </svg>
            ) : (
              <svg className="game__winner-icon" aria-label="X" role="img" viewBox="0 0 128 128">
                <path d="M16,16L112,112"></path>
                <path d="M112,16L16,112"></path>
              </svg>
            )}
            WINN!
          </p>
        </div>
      )}
    </div>
  );
};

export default Game;
