import { FunctionComponent } from 'react';
import styles from './Header.module.scss';

const Header: FunctionComponent = () => (
  <header className={styles.header}>
    <h1 data-testid="title">Plan Your Trip!</h1>
  </header>
);

export default Header;
