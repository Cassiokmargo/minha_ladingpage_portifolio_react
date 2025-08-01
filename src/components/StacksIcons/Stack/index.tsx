import { useState } from "react";
import styles from "./Stack.module.scss";

interface StackProps {
  src: string;
  descricao: string;
  alt: string;
}

const Stack = ({ src, descricao, alt }: StackProps) => {
  const [estaSelecionado, setEstaSelecionado] = useState(false);

  const getSvgColor = (srcColor: string) => {
    // Verifica se o src termina com .svg antes de fazer a substituição
    if (srcColor.endsWith(".svg")) {
      return srcColor.replace(".svg", "-color.svg");
    }
    return srcColor; // Retorna o original se não terminar com .svg
  };

  // Função para obter a cor baseada na tecnologia
  const getStackColor = (stackName: string) => {
    const colors: { [key: string]: string } = {
      HTML5: "#E34F26",
      CSS3: "#1572B6",
      JavaScript: "#F7DF1E",
      React: "#61DAFB",
      "Node.js": "#339933",
      TypeScript: "#3178C6",
      Git: "#F05032",
      Vite: "#646CFF",
      Docker: "#2496ED",
      MongoDB: "#47A248",
      Sass: "#CC6699",
      Bootstrap: "#7952B3",
      MySQL: "#4479A1",
      Angular: "#DD0031",
    };

    return colors[stackName] || "#888888"; // Cor padrão cinza se não encontrar
  };

  return (
    <div
      className={styles.stack_item}
      onMouseEnter={() => setEstaSelecionado(true)}
      onMouseLeave={() => setEstaSelecionado(false)}
    >
      <img src={estaSelecionado ? getSvgColor(src) : src} alt={alt} />
      <p
        style={{
          color: estaSelecionado ? getStackColor(descricao) : "#888888",
        }}
      >
        {descricao}
      </p>
    </div>
  );
};

export default Stack;
