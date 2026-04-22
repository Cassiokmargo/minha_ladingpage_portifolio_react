import styles from "./ButtonLinks.module.scss";

interface ButtonLinkProps {
  links: string[];
  src: string;
  descricao: string;
  alt: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const ButtonLink = ({
  links,
  src,
  alt,
  descricao,
  target,
}: ButtonLinkProps) => {
  return (
    <>
      <div className={styles["button_links_container"]}>
        {links.map((link) => (
          <a
            key={link}
            href={link}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
          >
            <img src={src} alt={alt} />
            {descricao}
          </a>
        ))}
      </div>
    </>
  );
};

export default ButtonLink;
