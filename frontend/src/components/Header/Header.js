import Container from '../Container/Container';
import styles from './styles.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <h1>Keyword Manager </h1>
      </Container>
    </div>
  );
};

export default Header;
