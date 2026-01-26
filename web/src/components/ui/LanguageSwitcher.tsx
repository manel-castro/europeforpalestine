import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  style?: React.CSSProperties;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ style }) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "es", label: "ES", name: "Español" },
    { code: "fr", label: "FR", name: "Français" },
    { code: "ar", label: "AR", name: "العربية" },
    { code: "zh", label: "中文", name: "中文" },
    { code: "de", label: "DE", name: "Deutsch" },
    { code: "nl", label: "NL", name: "Nederlands" },
    { code: "ca", label: "CA", name: "Català" },
    { code: "pt", label: "PT", name: "Português" },
    { code: "it", label: "IT", name: "Italiano" },
    { code: "ru", label: "RU", name: "Русский" },
    { code: "ja", label: "JA", name: "日本語" },
    { code: "ko", label: "KO", name: "한국어" },
    { code: "hi", label: "HI", name: "हिन्दी" },
    { code: "bn", label: "BN", name: "বাংলা" },
    { code: "tr", label: "TR", name: "Türkçe" },
    { code: "pl", label: "PL", name: "Polski" },
    { code: "uk", label: "UK", name: "Українська" },
    { code: "vi", label: "VI", name: "Tiếng Việt" },
    { code: "th", label: "TH", name: "ไทย" },
    { code: "he", label: "HE", name: "עברית" },
    { code: "id", label: "ID", name: "Indonesia" },
    { code: "ms", label: "MS", name: "Melayu" },
    { code: "fa", label: "FA", name: "فارسی" },
    { code: "ur", label: "UR", name: "اردو" },
    { code: "sv", label: "SV", name: "Svenska" },
    { code: "no", label: "NO", name: "Norsk" },
    { code: "da", label: "DA", name: "Dansk" },
    { code: "fi", label: "FI", name: "Suomi" },
    { code: "cs", label: "CS", name: "Čeština" },
    { code: "ro", label: "RO", name: "Română" },
    { code: "el", label: "EL", name: "Ελληνικά" },
    { code: "hu", label: "HU", name: "Magyar" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  // normalize language codes (handle detectors that return 'en-US' etc.)
  const getBaseLang = (lng: string) => (lng ? lng.split("-")[0] : "");
  const baseLang = getBaseLang(i18n.language || "");
  const hasLang = languages.some((l) => l.code === baseLang);
  const selectValue = hasLang ? baseLang : "en"; // fallback to English if not found

  return (
    <div style={{ position: "relative", ...style }}>
      <select
        value={selectValue}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeLanguage(e.target.value)
        }
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "50px",
          border: "1px solid #00732F",
          backgroundColor: "transparent",
          color: "white",
          cursor: "pointer",
          fontSize: "0.875rem",
          outline: "none",
          minWidth: "160px",

          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
        }}
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            style={{ backgroundColor: "#000", color: "white" }}
          >
            {lang.label} - {lang.name}
          </option>
        ))}
      </select>

      <span
    style={{
        position: "absolute",
        right: "1rem",
        top: "25%",
        pointerEvents: "none",
        color: "white",
        fontSize: "0.8rem",
        transform: "rotate(180deg)",
      }}
    >
      ^
    </span>
    </div>
  );
};

export default LanguageSwitcher;
