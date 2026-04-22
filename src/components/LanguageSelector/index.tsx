import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.scss";
import { useState, useRef, useEffect } from "react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);
  const otherLanguages = languages.filter(
    (lang) => lang.code !== i18n.language,
  );

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={styles.languageSelector}>
      <button className={styles.activeLangButton} onClick={toggleMenu}>
        {currentLanguage?.label}
      </button>

      {isOpen && (
        <ul className={styles.langMenu}>
          {otherLanguages.map((lang) => (
            <li key={lang.code} className={styles.langMenuItem}>
              <button
                className={styles.langMenuButton}
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
