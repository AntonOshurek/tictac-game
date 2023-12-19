//styles
import './players.scss';

const Players = (): JSX.Element => {
  return (
    <div className="players">
      <div className="player__item player__item--active-player">
        <svg className="player__symbol" aria-label="O" role="img" viewBox="0 0 128 128">
          <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"></path>
        </svg>
        <h3 className="player__name">Player 1</h3>
      </div>
      <div className="player__item">
        <svg className="player__symbol" aria-label="X" role="img" viewBox="0 0 128 128">
          <path d="M16,16L112,112"></path>
          <path d="M112,16L16,112"></path>
        </svg>
        <h3 className="player__name">Player 2</h3>
      </div>
    </div>
  );
};

export default Players;
