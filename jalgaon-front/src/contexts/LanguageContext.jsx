import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default to English
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState({});

  const fetchContent = async (section) => {
    if (content[section] || loading[section]) return;

    setLoading((prev) => ({ ...prev, [section]: true }));

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/content/${section}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setContent((prev) => ({ ...prev, [section]: data }));
    } catch (error) {
      console.error(`Error loading content for ${section}:`, error);
      setContent((prev) => ({ ...prev, [section]: null }));
    } finally {
      setLoading((prev) => ({ ...prev, [section]: false }));
    }
  };

  // Function to get content in current language
  const getTranslatedContent = (contentArray) => {
    if (!Array.isArray(contentArray)) return [];
    return contentArray.map((item) => ({
      ...item,
      display_content:
        language === "en" ? item.english_content : item.marathi_content,
    }));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        content,
        fetchContent,
        getTranslatedContent,
        isLoading: (section) => loading[section] || false,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
