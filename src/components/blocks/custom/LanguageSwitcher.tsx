import React, { useEffect, useRef, useState } from "react";
import { useLang } from "../../../context/LangContext";
import "./language-switcher.sass";
import { useCookies } from 'react-cookie';
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
const LANGUAGES = ["en", "th"];

export default function LanguageSwitcher(): JSX.Element {
  const { language, setLanguage } = useLang();
  const [cookies, setCookie, removeCookie] = useCookies(['lang']);
  const [selectLang, setSelectLang] = useState(language);
  const [isOpen, setIsOpen] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);
  const location = typeof window !== "undefined" ? useLocation() : null;
  const onChangeLanguage = (lang: string) => {
    setSelectLang(lang);
    setLanguage(lang);
    setIsOpen(false);
    setCookie('lang', lang, { path: '/' });
  };
  useEffect(()=>{
    setSelectLang(cookies.lang || 'en')
    setLanguage(cookies.lang || 'en')
  },[cookies.lang])
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && ulRef.current && !ulRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <ul ref={ulRef} className={isOpen ? "show" : ""}>
      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5.87155L0.768052 5.09339L3.97163 8.29698L3.97164 0L5.08329 4.85907e-08L5.08329 8.29698L8.27677 5.09339L9.05492 5.87155L4.52746 10.399L0 5.87155Z" fill="#0068FF" />
      </svg>
      {LANGUAGES.map((lang) => (
        <li key={lang} className={selectLang === lang ? "active" : ""} data-lang={lang} onClick={() => (selectLang === lang ? setIsOpen(!isOpen) : onChangeLanguage(lang))}>
          <span>{lang.toLocaleUpperCase()}</span>
        </li>
      ))}
    </ul>
  );
}
