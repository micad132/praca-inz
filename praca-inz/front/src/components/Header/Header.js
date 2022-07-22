import styles from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>motoPortal</h1>
      <h3>Coded by Michał Mosiołek</h3>
      <Nav />
    </header>
  );
};

export default Header;
