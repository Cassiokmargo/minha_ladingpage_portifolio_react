import ButtonLink from "../../ButtonLinks";
import styles from "./CardProject.module.scss";

interface CardProjectProps {
  src?: string;
  alt?: string;
  titulo?: string;
  descricao?: string;
  tags?: string[];
  links?: string[];
}

const CardProject = ({
  src,
  titulo,
  descricao,
  tags,
  links,
}: CardProjectProps) => {
  return (
    <div className={styles["project_container_card"]}>
      <div className={styles["project_container_card_img"]}>
        {src && <img src={src} alt={`Imagem do projeto ${titulo}`} />}
      </div>
      <div className={styles["project_container_card_info"]}>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <div className={styles["project_item_container_tags"]}>
          {tags?.map((tag, index) => (
            <span key={`${tag}-${index}`}>{tag}</span>
          ))}
        </div>
        {links && links.length > 0 && (
          <div className={styles["project_item_container_links"]}>
            <ButtonLink
              links={[links[0]]}
              descricao="Github"
              src="/assets/icons/github2.svg"
              alt="Icone do github"
            />
            {links[1] && (
              <ButtonLink
                links={[links[1]]}
                descricao="Acessar site"
                src="/assets/icons/site.svg"
                alt="Icone do site"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProject;
