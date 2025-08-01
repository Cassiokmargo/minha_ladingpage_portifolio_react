import BarraNeon from "../BarraNeon";
import styles from "./Footer.module.scss";
import FooterLinks from "./components";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <>
      <BarraNeon />
      <footer className={styles["footer_container"]}>
        <motion.div
          className={styles["footer_container_links"]}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <FooterLinks
            titulo="Contato"
            links={["cassio.dev.camargo@gmail.com"]}
          />
        </motion.div>
        <motion.div
          className={styles["footer_container_links"]}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <FooterLinks
            titulo="Social"
            links={["GitHub", "LinkedIn"]}
            href={[
              "https://github.com/cassiokmargo",
              "https://www.linkedin.com/in/cassio-c-camargo",
            ]}
          />
        </motion.div>
      </footer>
      {/* <BarraNeon className={styles["neon_copy"]}/> */}
      <div className={styles["footer_container_copy"]}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
        >
          © 2025 Cassio C. Camargo. Todos os direitos reservados.
        </motion.p>
      </div>
    </>
  );
};

export default Footer;
