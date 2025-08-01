import styles from "./Holofote.module.scss";

function Holofote() {
  return (
    <div className={styles["stage"]}>
      <div className={styles["spotlight"]}>
        <div className={styles["beam"]}></div>
      </div>
    </div>
  );
}

export default Holofote;
