import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div data-testid="copyright">© 2014-2021 Tiqets Amsterdam</div>
    </footer>
  );
};

export default Footer;
