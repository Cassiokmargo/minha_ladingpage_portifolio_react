import styles from "./Header.module.scss";
import BarraNeon from "../BarraNeon";
import LanguageSelector from "../LanguageSelector";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <LanguageSelector />
      </header>
      <BarraNeon />
    </>
  );
};

export default Header;
