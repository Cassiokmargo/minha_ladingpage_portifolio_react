import styles from "./CardServices.module.scss";

interface CardServicesProps {
  src: string;
  title: string;
  description: string;
}

const CardServices = ({ src, title, description }: CardServicesProps) => {
  return (
    <div className={styles.cardServices}>
      <img src={src} alt="Icone do serviço" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default CardServices;
