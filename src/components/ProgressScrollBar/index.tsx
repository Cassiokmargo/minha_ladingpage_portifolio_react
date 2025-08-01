import { useEffect, useState } from "react";
import styles from "./ProgressScrollBar.module.scss";

function ProgressScrollBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const alturaJanela = window.innerHeight;
      const alturaDocumento = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollProgress = (scrollY / (alturaDocumento - alturaJanela)) * 100;
      setScrollProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className={styles["progress-scroll-bar"]}>
      <div
        className={styles["progress_fill"]}
        style={{ height: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}

export default ProgressScrollBar;
