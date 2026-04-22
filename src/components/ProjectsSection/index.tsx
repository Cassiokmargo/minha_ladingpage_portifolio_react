import Project from "./Project";
import CardProject from "./CardProject";
import styles from "./ProjectsSection.module.scss";
import projects from "../../data/mocks/projects.json";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    // Verificar tamanho inicial
    checkScreenSize();

    // Adicionar listener para mudanças de tamanho
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className={styles["projects_section"]}>
      <div className={styles["projects_container"]}>
        <h2>{t("projects.title")}</h2>
      </div>
      <div className={styles["projects_list"]}>
        {projects.map((project, index) => {
          // Pegamos o index aqui
          const titleKey = `projects.items.${index}.title`;
          const descKey = `projects.items.${index}.description`;
          const buttonKey = `projects.items.${index}.button`;

          return isMobile ? (
            <CardProject
              key={project.id}
              src={project.src[0]}
              titulo={t(titleKey)} // Tradução dinâmica baseada na posição
              descricao={t(descKey)}
              tags={project.tags}
              links={project.links}
              button={t(buttonKey)}
            />
          ) : (
            <Project
              key={project.id}
              src={project.src}
              titulo={t(titleKey)}
              descricao={t(descKey)}
              tags={project.tags}
              links={project.links}
              button={t(buttonKey)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
