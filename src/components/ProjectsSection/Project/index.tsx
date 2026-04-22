import ButtonLink from "../../ButtonLinks";
import Carrossel from "../../SwiperComponent";
import styles from "./Project.module.scss";

interface ProjectProps {
  src?: string[];
  alt?: string[];
  titulo?: string;
  descricao?: string;
  tags?: string[];
  links?: string[];
  button: string;
}

const Project = ({ src, titulo, descricao, tags, links, button }: ProjectProps) => {
  return (
    <>
      <div className={styles["project_item_container"]}>
        <div className={styles["project_item_container_info"]}>
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
                target="_blank"
              />
              {links[1] && (
                <ButtonLink
                  links={[links[1]]}
                  descricao={button}
                  src="/assets/icons/site.svg"
                  alt="Icone do site"
                  target="_blank"
                />
              )}
            </div>
          )}
        </div>
        <div className={styles["project_item_container_img"]}>
          {src && src.length > 0 && (
            <Carrossel srcs={src} alt={`Imagens do projeto ${titulo}`} />
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
