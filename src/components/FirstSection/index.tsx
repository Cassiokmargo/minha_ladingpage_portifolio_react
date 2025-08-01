import SocialMedia from "../SocialMedia";
import SetaParaBaixoIcon from "../VIcon";

import styles from "./FirstSection.module.scss";

const FirstSection = () => {
  return (
    <section className={styles.firstSection}>
      <div className={styles["container_titulo"]}>
        <h1>Cássio</h1>
        <h1 className={styles["typewriter"]}>Camargo</h1>
        <h3>Front-end, Web Developer</h3>
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
          Olá, sou Cássio Camargo, um desenvolvedor front-end apaixonado por
          criar experiências web incríveis. Minha jornada na programação começou
          com um curso de desenvolvimento web e desde então, tenho me
          especializado em HTML, CSS e JavaScript. Atualmente, estou focado em
          aprimorar minhas habilidades em React e TypeScript para criar
          interfaces modernas e responsivas.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
