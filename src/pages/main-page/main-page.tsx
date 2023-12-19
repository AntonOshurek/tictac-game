//components
import { Header, GameBoard } from '../../components';
//styles
import './main-page.scss';

const MainPage = (): JSX.Element => {
  return (
    <div className="main-page">
      <Header />
      <main className="main-page__main">
        <GameBoard />
      </main>
    </div>
  );
};

export default MainPage;
