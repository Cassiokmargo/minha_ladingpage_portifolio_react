import styles from "./StacksIcons.module.scss";
import stacks from "../../mocks/stacks.json";
import Stack from "./Stack";
import { motion } from "motion/react";

const StacksIcons = () => {
  return (
    <div className={styles["container_stacks_icons"]}>
      {stacks.map((stack, index) => (
        <motion.div
          key={stack.id}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2, // 0.1s de delay entre cada item
            ease: "easeOut",
          }}
        >
          <Stack src={stack.src} descricao={stack.descricao} alt={stack.alt} />
        </motion.div>
      ))}
    </div>
  );
};

export default StacksIcons;
