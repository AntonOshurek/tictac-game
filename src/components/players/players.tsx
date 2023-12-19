//store
import { useAppSelector } from '../../hooks/store-hooks';
import { SelectorGetCurrentPlayer, SelectorGetWinner } from '../../store/selectors/selectors';
//variables
import { PlayersNames } from '../../variables/variables';
//styles
import './players.scss';

const Players = (): JSX.Element => {
  const currentUser = useAppSelector(SelectorGetCurrentPlayer);
  const winner = useAppSelector(SelectorGetWinner);

  const activePlayerClass = winner === null && 'player__item--active-player';

  return (
    <div className="players">
      <div className={`player__item ${currentUser === PlayersNames.ZERO && activePlayerClass}`}>
        <svg className="player__symbol" aria-label="O" role="img" viewBox="0 0 128 128">
          <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"></path>
        </svg>
        <h3
          className={`player__name ${winner === PlayersNames.ZERO && 'player__name--win-player'}`}
        >
          {winner === PlayersNames.ZERO ? 'Winner' : 'ZERO'}
        </h3>
      </div>
      <div className={`player__item ${currentUser === PlayersNames.CROSS && activePlayerClass}`}>
        <svg className="player__symbol" aria-label="X" role="img" viewBox="0 0 128 128">
          <path d="M16,16L112,112"></path>
          <path d="M112,16L16,112"></path>
        </svg>
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
