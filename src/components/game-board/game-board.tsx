//components
import { Players, Game } from '../';
//styles
import './game-board.scss';

const GameBoard = (): JSX.Element => {
  return (
    <section className="game-board">
      <header className="game-board__header">
        <h2 className="visually-hidden">dashboard</h2>
        <Players />
      </header>
      <section className="game-board__game">
        <h2 className="visually-hidden">game board</h2>
        <Game />
      </section>

      <button type="button">reset game</button>
    </section>
  );
};

export default GameBoard;
