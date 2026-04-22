import CardServices from "../CardServices";
import styles from "./ServicesSection.module.scss";
import services from "../../data/mocks/services.json";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesTitle}>
          <h2>{t("services.title")}</h2>
        </div>
        <div className={styles.servicesCards}>
          <div className={styles.serviceDescription}>
            <h3>{t("services.subtitle")}</h3>
            <p>{t("services.description")}</p>
            <div className={styles.buttonsContainer}>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={styles.buttonContact}
              >
                <span>{t("services.contactButton")}</span>
              </button>
            </div>
          </div>
          <div className={styles.servicesCardsContainer}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                <CardServices
                  src={service.src}
                  title={t(`services.items.${index}.title`)}
                  description={t(`services.items.${index}.description`)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
