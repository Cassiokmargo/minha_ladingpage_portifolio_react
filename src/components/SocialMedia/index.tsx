import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.social_media_container}>
      <img src="src/assets/icons/linkedin.svg" alt="Icone do Linkedin" />
      <img src="src/assets/icons/whatsapp.svg" alt="Icone do Whatsapp" />
      <img src="src/assets/icons/github.svg" alt="Icone do Github" />
    </div>
  );
};

export default SocialMedia;
