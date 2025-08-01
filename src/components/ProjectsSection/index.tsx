import Project from "./Project";
import CardProject from "./CardProject";
import styles from "./ProjectsSection.module.scss";
import projects from "../../mocks/projects.json";
import { useState, useEffect } from "react";

const ProjectsSection = () => {
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
        <h2>Projetos</h2>
      </div>
      <div className={styles["projects_list"]}>
        {projects.map((project) =>
          isMobile ? (
            <CardProject
              key={project.id}
              src={project.src[0]} // CardProject usa apenas a primeira imagem
              titulo={project.titulo}
              descricao={project.descricao}
              tags={project.tags}
              links={project.links}
            />
          ) : (
            <Project
              key={project.id}
              src={project.src}
              titulo={project.titulo}
              descricao={project.descricao}
              tags={project.tags}
              links={project.links}
            />
          )
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
