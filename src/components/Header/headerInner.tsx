import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import "./style.sass";
import { Link, graphql, useStaticQuery } from "gatsby"
import MenuBlack from "../../images/menu-black.svg"
import MenuWhite from "../../images/menu-white.svg"
import MenuClose from "../../images/menu-close-black.svg"
import { NavLink } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";

interface Props {
  mainLogoBlack: string;
  mainLogoWhite: string;
}

const colorHeader = (isHeaderBlack:boolean, mainLogoWhite:string, setMainLogo:any, setTextColorHeader:any) => {
  if(isHeaderBlack) {return;};
  setMainLogo(mainLogoWhite);
  setTextColorHeader('#fff');
}

export const HeaderInner = ({
  mainLogoBlack,
  mainLogoWhite
}: Props): JSX.Element => {

  const data2 = useStaticQuery(
    graphql`
      query siteHeader {
        allWpMenu {
          nodes {
            menuItems {
              nodes {
                uri
                label
              }
            }
          }
        }
      }
    `
  )
  const dataHeader = data2.allWpMenu.nodes[0].menuItems.nodes;
  const [isHeaderBlack, setIsHeaderBlack] = useState(true);
  const [textColorHeader, setTextColorHeader] = useState('#1E1E1E');
  const [mainLogo, setMainLogo] = useState(mainLogoBlack);
  const [menuIcon, setMenuIcon] = useState(MenuBlack);
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
      if (sectionHeader && mainTag && resizeStatus) {
        const handleResize = () => {
          const sectionHeaderHeight = sectionHeader.offsetHeight;
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

  }, [mainLogoBlack, mainLogoWhite, isClickMenu]);

  const handleMenuMobileClick = () => {
    setIsClickMenu(prevIsClickMenu => !prevIsClickMenu);
  }

  return (
    <header
      className={`header container ${isClickMenu ? 'header__hidden' : 'header__visible'}`}
    >
      <Link
        to="/"
      >
        <img
          alt="Zipcode"
          height={37}
          style={{ margin: 0 }}
          src={ mainLogo }
        />
      </Link>
  
      <div className="header__nav" style={{ color : textColorHeader }}>
        { dataHeader.map((menu:any) => (
            <div className="header__nav--link">
              <Link to={menu.uri} activeClassName="active">
                {menu.label}
              </Link>
            </div>

        ))}
      </div>

      <div className="header__toggle">
        <img
          src={isClickMenu ? menuIcon : MenuClose}
          alt="Menu"
          onClick={() =>{ handleMenuMobileClick() }}
        />
      </div>
  
    </header>
  );
};

HeaderInner.propTypes = {
  property1: PropTypes.oneOf(["desktop"]),
  buttonsProperty1: PropTypes.string,
  line: PropTypes.string,
};