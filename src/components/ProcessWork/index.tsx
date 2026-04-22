import ProcessItem from "./ProcessItem";
import styles from "./ProcessWork.module.scss";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" as const },
  },
};

const ProcessWorkSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.processWorkSection}>
      <div className={styles.processWorkContainer}>
        <div className={styles.processWorkTitle}>
          <h2>{t('process.title')}</h2>
          <p>{t('process.subtitle')}</p>
        </div>
        <motion.div
          className={styles.processContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={itemVariants}>
            <ProcessItem
              step="01"
              title={`${t('process.steps.0.title')}`}
              description={`${t('process.steps.0.description')}`}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProcessItem
              step="02"
              title={`${t('process.steps.1.title')}`}
              description={`${t('process.steps.1.description')}`}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProcessItem
              step="03"
              title={`${t('process.steps.2.title')}`}
              description={`${t('process.steps.2.description')}`}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProcessItem
              step="04"
              title={`${t('process.steps.3.title')}`}
              description={`${t('process.steps.3.description')}`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessWorkSection;
