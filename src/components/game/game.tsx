//store
// import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
// import { SelectorGetCurrentPlayer } from '../../store/selectors/selectors';
//components
import GameItem from './game-item/game-item';
//styles
import './game.scss';

const Game = (): JSX.Element => {
  // const dispatch = useAppDispatch();
  // const currentUser = useAppSelector(SelectorGetCurrentPlayer);

  const renderGameItems = () => {
    const items = [];
    for (let i = 0; i < 9; i++) {
      items.push(<GameItem key={i} />);
    }
    return items;
  };

  return <div className="game">{renderGameItems()}</div>;
};

export default Game;
