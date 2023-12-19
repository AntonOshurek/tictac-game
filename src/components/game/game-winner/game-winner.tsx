//components
import { CrossIcon, ZeroIcon } from '../../';
//types
import type { winnerValueType } from '../../../types';
//variables
import { PlayersNames, REMIS_WINNER, ZeroCrossIconSize } from '../../../variables/variables';
//styles
import './game-winner.scss';

interface IGameWinnerPopupProps {
  winner: winnerValueType;
}

const GameWinnerPopup = ({ winner }: IGameWinnerPopupProps): JSX.Element => {
  return (
    <div className="game-winner-popup">
      <div className="game-winner-popup__text">
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
            <div className="game-winner-popup__remis">
              <ZeroIcon size={ZeroCrossIconSize.LARGE} />
              <CrossIcon size={ZeroCrossIconSize.LARGE} />
            </div>
            REMIS!
          </>
        )}
      </div>
    </div>
  );
};

export default GameWinnerPopup;
