import styles from "./ButtonDownload.module.scss";
import downloadIcon from "/assets/icons/download-icon.svg";

const DownloadButton = () => {
  const handleDownload = () => {
    // Caminho para o arquivo na pasta public
    const link = document.createElement("a");
    link.href = "assets/curriculo.pdf";
    link.download = "cassio-camargo-curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className={styles.buttonDownload}>
      Baixar Currículo <img src={downloadIcon} alt="Ícone de download" />
    </button>
  );
};

export default DownloadButton;
