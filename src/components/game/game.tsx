//store
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { SelectorGetCurrentPlayer, SelectorGetWinner } from '../../store/selectors/selectors';
import {
  addFieldValueToPlayerAction,
  changeCurrentPlayerAction,
} from '../../store/slices/tic-tac-slice';
//variables
import { PlayersNames, REMIS_WINNER, ZeroCrossIconSize } from '../../variables/variables';
//components
import GameItem from './game-item/game-item';
import { ZeroIcon, CrossIcon } from '../';
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
      {winner !== null && (
        <div className="game__winner">
          <p className="game__winner-name">
            {winner === PlayersNames.ZERO && (
              <>
                <ZeroIcon size={ZeroCrossIconSize.LARGE} />
                WINN!
              </>
            )}
            {winner === PlayersNames.CROSS && (
              <>
                <CrossIcon size={ZeroCrossIconSize.LARGE} />
                WINN!
              </>
            )}
            {winner === REMIS_WINNER && (
              <>
                <div className="game__winner-remis">
                  <ZeroIcon size={ZeroCrossIconSize.LARGE} />
                  <CrossIcon size={ZeroCrossIconSize.LARGE} />
                </div>
                REMIS!
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Game;
