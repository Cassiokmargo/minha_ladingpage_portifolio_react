import styles from "./Header.module.scss";
import BarraNeon from "../BarraNeon";

const Header = () => {
  return (
    <>
      <header className={styles.header}></header>
      <BarraNeon />
    </>
  );
};

export default Header;
