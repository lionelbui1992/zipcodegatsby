import React, { useEffect, useState } from "react";
import "../assets/sass/header.sass";
import { gql, useQuery } from "@apollo/client";
import { Link } from "gatsby";

export default function Header(): JSX.Element {
  const mainLogoBlack = "/img/main-logo-black.svg"
  const mainLogoWhite = "/img/main-logo-white.svg"

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

  // State
  const [siteLogo, setSiteLogo] = useState("");
  const [siteTitle, setSiteTitle] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  // useEffect
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
  

  const colorHeader = (isHeaderBlack:boolean, mainLogoWhite:string, setMainLogo:any, setTextColorHeader:any) => {
    if(isHeaderBlack) {return;};
    setMainLogo(mainLogoWhite);
    setTextColorHeader('#fff');
  }

  const [isHeaderBlack, setIsHeaderBlack] = useState(true);
  const [textColorHeader, setTextColorHeader] = useState('#1E1E1E');
  const [mainLogo, setMainLogo] = useState(mainLogoBlack);
  const [isClickMenu, setIsClickMenu] = useState(true);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const menus = document.querySelectorAll('.header__nav--link a');
    menus.forEach(menu => {
      const menuUrl = menu.getAttribute('href');
      if (currentUrl === menuUrl) {
        menu.setAttribute('aria-current', 'page');
        menu.classList.add('active');
      }
    });

    colorHeader(isHeaderBlack, mainLogoWhite, setMainLogo, setTextColorHeader);

    const sectionsBlack = document.querySelectorAll(".bg-black");
    const sectionHeader = document.querySelector(".header");
    const mainTag = document.querySelector("main");

    const handleScroll = (sectionsBlack:any, sectionHeader:any, resizeStatus:boolean) => {
      // add padding header section to main tag
      const sectionHeaderHeight = sectionHeader.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        sectionHeader.classList.add('on-scroll');
      } else {
        sectionHeader.classList.remove('on-scroll');
      }

      if (sectionHeader && mainTag && resizeStatus) {
        const handleResize = () => {
          
          document.documentElement.style.setProperty('--paddingTop', `${sectionHeaderHeight}px`);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
      }
    }
    handleScroll(sectionsBlack, sectionHeader, true);
    window.addEventListener("scroll", () => handleScroll(sectionsBlack, sectionHeader, false));

    const listMenu = document.querySelectorAll('.header__nav--link');
    const heightMenuOnMobile = listMenu.length * 74 + 74;

    // add overflow to body and toggle menu on mobile
    const handleBodyOverflow = () => {
      const body = document.body;
      if (! isClickMenu) {
        body.style.overflow = 'hidden';
        document.documentElement.style.setProperty('--heightMenu', `${heightMenuOnMobile}px`);
      } else {
        body.style.overflow = 'auto';
        document.documentElement.style.setProperty('--heightMenu', '0px');
      }
    }
    handleBodyOverflow();

  }, [mainLogoBlack, mainLogoWhite, isClickMenu, menuItems]);

  const handleMenuMobileClick = () => {
    setIsClickMenu(prevIsClickMenu => !prevIsClickMenu);
  }
  
  return (
    <header
      className={`header container ${isClickMenu ? 'header__hidden' : 'header__visible'}`}
    >
      {(siteLogo && siteLogo !== "") && (
        <Link
          to="/"
        >
          <img
            alt={siteTitle}
            height={37}
            style={{ margin: 0 }}
            src={siteLogo}
          />
        </Link>
      
      )}
  
      <div className="header__nav" style={{ color : textColorHeader }}>
        { menuItems.map((menu:any, index: number) => (
            <div className="header__nav--link" key={index}>
              <Link to={menu.uri} activeClassName="active">
                {menu.label}
              </Link>
            </div>
        ))}
      </div>

      <div className="header__toggle" onClick={handleMenuMobileClick}>
        <img
          src={isClickMenu ? '/img/menu-black.svg' : '/img/menu-close-black.svg'}
          alt="Menu"
        />
      </div>
  
    </header>
  );
};
