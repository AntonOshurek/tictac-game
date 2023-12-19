//styles
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__wrap container">
        <h1 className="header__title">TicTac game</h1>
      </div>
    </header>
  );
};

export default Header;
