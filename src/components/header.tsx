import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link, navigate } from "gatsby";
import { useLang } from "../context/LangContext";

export default function Header(): JSX.Element {
  const { language, setLanguage } = useLang();
  const [selectLang, setSelectLang ] = useState("");
  const mainLogoBlack = "/img/main-logo-black.svg"
  const mainLogoWhite = "/img/main-logo-white.svg"
  const menuLogoBlack = "/img/menu-z-black.svg"
  const menuLogoWhite = "/img/menu-z-white.svg"
  const [mainLogo, setMainLogo] = useState(mainLogoBlack);
  const [menuLogo, setMenuLogo] = useState(menuLogoBlack);
  const [textColorHeader, setTextColorHeader] = useState('#1E1E1E');

  // State data
  const [siteLogo, setSiteLogo] = useState("");
  const [siteTitle, setSiteTitle] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  // State - Header color
  const [isHeaderBlack, setIsHeaderBlack] = useState(true);
  const [isBannerBlack, setIsBannerBlack] = useState(false);
  const [isClickMenu, setIsClickMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const headerQuery = gql`
  query headerData {
    siteLogo {
      sourceUrl
      slug
      uri
    }
    allSettings {
      generalSettingsTitle
    }
    menuItems {
      nodes {
        uri
        label
      }
    }
  }
  `;
  const { loading, error, data } = useQuery(headerQuery);
  useEffect(() => {
    if (!loading && !error && data) {
      if (data.siteLogo) {
        setSiteLogo(data.siteLogo.sourceUrl);
      }
      if (data.allSettings && data.allSettings.generalSettingsTitle) {
        setSiteTitle(data.allSettings.generalSettingsTitle);
      }
      if (data.menuItems) {
        setMenuItems(data.menuItems.nodes);
      }
    }
  }, [data]);
  useEffect(()=>{
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("lang",language);
    navigate(`${window.location.pathname}?${searchParams.toString()}`, {
      replace: true, // Optional: Replaces the current entry in history instead of adding a new one
    });
  },[language])
  // Set header color
  useEffect(() => {
    if (isHeaderBlack) {
      setMainLogo(mainLogoBlack);
      setMenuLogo(menuLogoBlack);
      setTextColorHeader('#1E1E1E');
    } else {
      setMainLogo(mainLogoWhite);
      setMenuLogo(menuLogoWhite);
      setTextColorHeader('#fff');
    };
  }, [isHeaderBlack]);

  useEffect(() => {
    if (isClickMenu == false && isScroll == false && isBannerBlack == true) {
      setIsHeaderBlack(false);
    } else {
      setIsHeaderBlack(true);
    }
  }, [isClickMenu, isScroll, isBannerBlack]);

  useEffect(() => {
    const listMenu = document.querySelectorAll('.header__nav--link');
    const heightMenuOnMobile = listMenu.length * 85 + 85;
    // add overflow to body and toggle menu on mobile
    const handleBodyOverflow = () => {
      const body = document.body;
      if (isClickMenu) {
        body.style.overflow = 'hidden';
        document.documentElement.style.setProperty('--heightMenu', `${heightMenuOnMobile}px`);
      } else {
        body.style.overflow = 'auto';
        document.documentElement.style.setProperty('--heightMenu', '0px');
      }
    }
    handleBodyOverflow();
  }, [isClickMenu]);

  const checkBannerBlack = (bannerBlack: any) => {
    bannerBlack = document.querySelectorAll("section.bg-black");
    if (bannerBlack.length > 0) {

      setIsBannerBlack(true);
      clearInterval(setTimeCheckBannerBlack);
    }
  }
  const stopCheckBannerBlack = () => {
    clearInterval(setTimeCheckBannerBlack);
  }
  const setTimeCheckBannerBlack = setInterval(checkBannerBlack, 250);
  const setTimeStopCheckBannerBlack = setTimeout(stopCheckBannerBlack, 2000);

  useEffect(() => {
    // add active menu when F5 reload page, <Link> tag not working
    const currentUrl = window.location.pathname;
    const menus = document.querySelectorAll('.header__nav--link a');
    menus.forEach(menu => {
      const menuUrl = menu.getAttribute('href') ?? '';
      const itemUrl = (new URL(menuUrl, window.location.origin)).pathname;
      if (currentUrl === itemUrl) {
        menu.setAttribute('aria-current', 'page');
        menu.classList.add('active');
      }
    });

    const sectionHeader = document.querySelector(".header");
    const mainTag = document.querySelector("main");

    const handleScroll = (sectionHeader: any) => {
      // add padding header section to main tag
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        sectionHeader.classList.add('on-scroll');
        setIsScroll(true);
      } else {
        sectionHeader.classList.remove('on-scroll');
        setIsScroll(false);
      }
    }

    // handleScroll(sectionHeader);
    window.addEventListener("scroll", () => handleScroll(sectionHeader));

    const handleResize = (sectionHeader: any) => {
      const sectionHeaderHeight = sectionHeader.offsetHeight;
      document.documentElement.style.setProperty('--paddingTop', `${sectionHeaderHeight}px`);
    };

    if (sectionHeader && mainTag) {
      window.addEventListener("resize", () => handleResize(sectionHeader));
    }

  }, []);

  const handleMenuMobileClick = () => {
    setIsClickMenu(prevIsClickMenu => !prevIsClickMenu);
  }
  const [isClick,setIsClick] = useState(false);
  const isClickSelect=(e:any) =>{
    e.stopPropagation();
    setIsClick(!isClick)
    console.log(isClick);
    
  } 
  const selectLanguage = (lang:string,event:any) =>{
    // event.stopPropagation(); 
     setSelectLang(lang)
     setLanguage(lang)
     setIsClick(false);
  }
  return (
    <header
      className={`header container ${isClickMenu ? 'header__visible' : 'header__hidden'} ${isScroll ? 'on-scroll' : ''}`}
    >

      <Link
        to="/"
      >
        <img
          alt={siteTitle}
          height={37}
          style={{ margin: 0 }}
          src={mainLogo}
        />
      </Link>



      <div className="header__nav" style={{ color: textColorHeader }}>
        {menuItems.map((menu: any, index: number) => (
          <div className="header__nav--link" key={index}>
           <Link to={`${menu.uri}?lang=${language}`} activeClassName="active">
              {menu.label}
            </Link>
          </div>
        ))}
        <div className="header__nav--link">
             <ul onClick={(e)=>isClickSelect(e)} className={isClick === true ? 'show':''}>
                  <li className="default">{selectLang || language}</li>
                  <li className={selectLang === 'en' && isClick ? 'active' : ''} onClick={(e) =>selectLanguage("en",e)}><span>EN</span></li>
                  <li className={selectLang === 'th' && isClick ? 'active' : ''} onClick={(e) =>selectLanguage("th",e)}><span>TH</span></li>
             </ul>
        </div>
      </div>

      <div className="header__toggle" onClick={handleMenuMobileClick}>
        <img
          src={isClickMenu ? '/img/menu-x-close-black.svg' : menuLogo}
          alt="Menu"
        />
      </div>

    </header>
  );
};
