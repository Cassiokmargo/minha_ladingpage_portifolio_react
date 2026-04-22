import SocialMedia from "../SocialMedia";
import SetaParaBaixoIcon from "../VIcon";
import { useTranslation } from "react-i18next";

import styles from "./FirstSection.module.scss";

const FirstSection = () => {
  const { t } = useTranslation();


  return (
    <section className={styles.firstSection}>
      <div className={styles["container_titulo"]}>
        <h1>Cássio</h1>
        <h1 className={styles["typewriter"]}>Camargo</h1>
        <h2>Front-end, Web Developer</h2>
        <div className={styles["container_contato"]}>
          <p>cassio.dev.camargo@gmail.com</p>
          <SocialMedia />
        </div>
      </div>
      <div className={styles["container_seta"]}>
        <SetaParaBaixoIcon />
      </div>
      <div className={styles["container_descricao"]}>
        <p>
          <strong>{t('hero.title')}</strong> <br /><br />
          {t('hero.description')}
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
