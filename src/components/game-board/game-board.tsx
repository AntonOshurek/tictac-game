//components
import { Players } from '../';
//styles
import './game-board.scss';

const GameBoard = (): JSX.Element => {
  return (
    <section className="game-board">
      <header className="game-board__header">
        <h2 className="visually-hidden">dashboard</h2>
        <Players />
      </header>
      <section>
        <h2 className="visually-hidden">game board</h2>
      </section>
    </section>
  );
};

export default GameBoard;
