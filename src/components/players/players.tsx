//store
import { useAppSelector } from '../../hooks/store-hooks';
import { SelectorGetCurrentPlayer, SelectorGetWinner } from '../../store/selectors/selectors';
//components
import { ZeroIcon, CrossIcon } from '../';
//variables
import { PlayersNames, ZeroCrossIconSize } from '../../variables/variables';
//styles
import './players.scss';

const Players = (): JSX.Element => {
  const currentUser = useAppSelector(SelectorGetCurrentPlayer);
  const winner = useAppSelector(SelectorGetWinner);

  const activePlayerClass = winner === null && 'player__item--active-player';

  return (
    <div className="players">
      <div className={`player__item ${currentUser === PlayersNames.ZERO && activePlayerClass}`}>
        <ZeroIcon size={ZeroCrossIconSize.SMALL} />
        <h3
          className={`player__name ${winner === PlayersNames.ZERO && 'player__name--win-player'}`}
        >
          {winner === PlayersNames.ZERO ? 'Winner' : 'ZERO'}
        </h3>
      </div>
      <div className={`player__item ${currentUser === PlayersNames.CROSS && activePlayerClass}`}>
        <CrossIcon size={ZeroCrossIconSize.SMALL} />
        <h3
          className={`player__name ${winner === PlayersNames.CROSS && 'player__name--win-player'}`}
        >
          {winner === PlayersNames.CROSS ? 'Winner' : 'CROSS'}
        </h3>
      </div>
    </div>
  );
};

export default Players;
