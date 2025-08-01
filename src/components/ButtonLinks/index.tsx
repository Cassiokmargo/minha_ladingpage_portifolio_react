import styles from "./ButtonLinks.module.scss";

interface ButtonLinkProps {
    links: string[];
    src: string;
    descricao: string;
    alt: string;
    
}

const ButtonLink = ({ links, src, alt, descricao}: ButtonLinkProps) => {
  return (
    <>
    <div className={styles["button_links_container"]}>
        {links.map((link) => (
            <a key={link} href={link}>
            <img src={src} alt={alt}/>{descricao}
          </a>          
        ))}
    </div>
    </>
  )
}

export default ButtonLink