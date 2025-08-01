import StacksIcons from "../StacksIcons";
import styles from "./StacksSection.module.scss";
import { motion } from "motion/react";

const StacksSection = () => {
  return (
    <section className={styles.stacks_section}>
      <div className={styles["stacks_container_titulo"]}>
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Tech Stack
        </motion.h2>
        <motion.p
          className={styles["titulo_descricao"]}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Minhas principais tecnologias
        </motion.p>
        <div className={styles["stacks_container_swiper"]}>
          <StacksIcons />
        </div>
      </div>
    </section>
  );
};

export default StacksSection;
