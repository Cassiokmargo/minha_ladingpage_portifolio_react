import styles from "../Footer.module.scss";

interface FooterLinksProps {
  titulo: string;
  links: string[];
  href?: string[];
}

const FooterLinks = ({ titulo, links, href }: FooterLinksProps) => {
  return (
    <div key={titulo} className={styles["footerLinks"]}>
      <h3>{titulo}</h3>
      {links.map((links, index) => {
        const ehEmail = !href || !href[index] || href[index] === "";
        const url = ehEmail ? `mailto:${links}` : href[index];
        return (
          <a
            key={links}
            href={url}
            target={ehEmail ? undefined : "_blank"}
            rel={ehEmail ? undefined : "noopener noreferrer"}
          >
            {links}
          </a>
        );
      })}
    </div>
  );
};

export default FooterLinks;
