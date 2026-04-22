import styles from "./ProcessItem.module.scss";
import { motion } from "motion/react";

interface ProcessItemProps {
  step: string;
  title: string;
  description: string;
}

const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1.4, ease: "easeInOut" as const },
  },
};

const ProcessItem = ({ step, title, description }: ProcessItemProps) => {
  return (
    <div className={styles.processItem}>
      <div className={styles.processItemHeader}>
        <div className={styles.processDot}>●</div>
        <motion.div className={styles.processLine} variants={lineVariants} />
      </div>
      <h3>{step}</h3>
      <p>{title}</p>
      <span>{description}</span>
    </div>
  );
};

export default ProcessItem;
