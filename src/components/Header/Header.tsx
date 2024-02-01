import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import "./style.sass";
import { Link } from "gatsby"
import MenuBlack from "../../images/menu-black.svg"
import MenuWhite from "../../images/menu-white.svg"
import MenuClose from "../../images/menu-close-black.svg"

interface Props {
  mainLogoBlack: string;
  mainLogoWhite: string;
}

const colorHeader = (isHeaderBlack:boolean, mainLogoWhite:string, setMainLogo:any, setTextColorHeader:any) => {
  if(isHeaderBlack) {return;};
  setMainLogo(mainLogoWhite);
  setTextColorHeader('#fff');
}

export const Header = ({
  mainLogoBlack,
  mainLogoWhite
}: Props): JSX.Element => {

  const [isHeaderBlack, setIsHeaderBlack] = useState(true);
  const [textColorHeader, setTextColorHeader] = useState('#1E1E1E');
  const [mainLogo, setMainLogo] = useState(mainLogoBlack);
  const [menuIcon, setMenuIcon] = useState(MenuBlack);
  const [isClickMenu, setIsClickMenu] = useState(true);

  useEffect(() => {
    colorHeader(isHeaderBlack, mainLogoWhite, setMainLogo, setTextColorHeader);

    const sectionsBlack = document.querySelectorAll(".bg-black");
    const sectionHeader = document.querySelector(".header");
    const mainTag = document.querySelector("main");

    // const isGsap = document.querySelector("#___gatsby") as HTMLElement;;

    // if (isGsap) {
    //   const transformStyle = isGsap.style.transform;
    //   if (transformStyle && transformStyle.indexOf("matrix3d") !== -1) {
    //     fix_scroll();
    //   }
    // }

    const handleScroll = (sectionsBlack:any, sectionHeader:any, resizeStatus:boolean) => {
      // add padding header section to main tag
      if (sectionHeader && mainTag && resizeStatus) {
        const handleResize = () => {
          const sectionHeaderHeight = sectionHeader.offsetHeight;
          // mainTag.style.paddingTop = `${sectionHeaderHeight}px`;
          document.documentElement.style.setProperty('--paddingTop', `${sectionHeaderHeight}px`);
          console.log(1111);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
      }
      // set color header
      if(sectionsBlack.length > 0) {
          for (const sectionBlack of sectionsBlack) {
          const rect = sectionBlack.getBoundingClientRect();

          if (rect.top <= sectionHeader.offsetHeight/2 && rect.top + rect.height > sectionHeader.offsetHeight/2) {
            setIsHeaderBlack(false);
            setMainLogo(mainLogoWhite);
            setMenuIcon(MenuWhite);
            setTextColorHeader("#fff");
            break;
          } else {
            setIsHeaderBlack(true);
            setMainLogo(mainLogoBlack);
            setMenuIcon(MenuBlack);
            setTextColorHeader("#1E1E1E");
          }
        }
    
      }
    }
    handleScroll(sectionsBlack, sectionHeader, true);
    window.addEventListener("scroll", () => handleScroll(sectionsBlack, sectionHeader, false));
    
  }, [mainLogoBlack, mainLogoWhite]);

  const handleMenuMobileClick = () => {
    setIsClickMenu(prevIsClickMenu => !prevIsClickMenu);
  }

  // const fix_scroll = () => {
  //   const s = window.scrollY;
  //   console.log(s);
  //   const fixedHeader = document.querySelector('.header');
  //   fixedHeader.style.position = 'absolute';
  //   fixedHeader.style.top = `${s}px`;
  // };

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
        <div className="header__nav--link">
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </div>
        <div className="header__nav--link">
          <Link to="/projects" activeClassName="active">
            Projects
          </Link>
        </div>
        <div className="header__nav--link">
          <Link to="/careers" activeClassName="active">
            Careers
          </Link>
        </div>
        <div className="header__nav--link">
          <Link to="/philosophy" activeClassName="active">
            Philosophy
          </Link>
        </div>
        <div className="header__nav--link">
          <Link to="/news" activeClassName="active">
            News
          </Link>
        </div>
        <div className="header__nav--link">
          <Link to="/rewards" activeClassName="active">
            Rewards
          </Link>
        </div>
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

Header.propTypes = {
  property1: PropTypes.oneOf(["desktop"]),
  buttonsProperty1: PropTypes.string,
  line: PropTypes.string,
};