import { motion } from "motion/react";

interface SetaParaBaixoIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const SetaParaBaixoIcon = ({
  width = 20,
  height = 10,
  className = "",
  color = "white",
}: SetaParaBaixoIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 23 13"
        fill="none"
        className={className}
      >
        <path
          d="M0 0H4.37L10.534 9.19455C10.7793 9.55697 10.9633 9.88 11.086 10.1636C11.2087 10.4315 11.3007 10.66 11.362 10.8491C11.4233 11.0855 11.454 11.2903 11.454 11.4636H11.868C11.8373 11.2903 11.8527 11.0855 11.914 10.8491C11.9753 10.66 12.052 10.4315 12.144 10.1636C12.236 9.88 12.4047 9.55697 12.65 9.19455L18.492 0H23L13.938 13H9.246L0 0Z"
          fill={color}
          fillOpacity="0.8"
        />
      </svg>
    </motion.div>
  );
};

export default SetaParaBaixoIcon;
