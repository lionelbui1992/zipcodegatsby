import React, { useEffect, useRef, useState } from "react";
import { useLang } from "../../../context/LangContext";
import "./language-switcher.sass";
import { useCookies } from 'react-cookie';
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { useQuery, gql } from '@apollo/client';

export default function LanguageSwitcher(): JSX.Element {
  const { language, setLanguage } = useLang();
  const [LANGUAGES,setLANGUAGES] = useState<any>([])
  const [cookies, setCookie, removeCookie] = useCookies(['lang']);
  const [selectLang, setSelectLang] = useState(language);
  const [isOpen, setIsOpen] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);
  const location = typeof window !== "undefined" ? useLocation() : null;
  const Languages = gql`
    query LanguageList{
      languages {
        code
      }
    }
  `
  const {loading, error, data} = useQuery(Languages);
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
  useEffect(()=>{
      if(!loading && !error && data){
        setLANGUAGES(data.languages)
        console.log("LANGUAGES",LANGUAGES);
      }
  },[data, loading, error])
  return (
    <>
        {
        LANGUAGES.length > 0  && (
            <ul ref={ulRef} className={isOpen ? "show" : ""}>
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.87155L0.768052 5.09339L3.97163 8.29698L3.97164 0L5.08329 4.85907e-08L5.08329 8.29698L8.27677 5.09339L9.05492 5.87155L4.52746 10.399L0 5.87155Z" fill="#0068FF" />
            </svg>
            {LANGUAGES.map((lang:any,index:number) => (
              <li key={index} className={selectLang === lang.code ? "active" : ""} data-lang={lang.code} onClick={() => (selectLang === lang.code ? setIsOpen(!isOpen) : onChangeLanguage(lang.code))}>
                <span>{lang.code.toLocaleUpperCase()}</span>
              </li>
            ))}
          </ul>
        )
      }
    </>
  );
}
