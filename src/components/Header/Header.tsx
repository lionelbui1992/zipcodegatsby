import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import "./style.sass";
import { Link } from "gatsby"
import MenuBlack from "../../images/menu-black.svg"
import MenuWhite from "../../images/menu-white.svg"

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

  useEffect(() => {
    colorHeader(isHeaderBlack, mainLogoWhite, setMainLogo, setTextColorHeader);
  }, []);
  return (
    <header
      className="header container"
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
  
      <div className="header__nav" style={{color : textColorHeader}}>
        <Link className="header__nav--link" to="/about">
          About
        </Link>
        <Link className="header__nav--link" to="/projects">
          Projects
        </Link>
        <Link className="header__nav--link" to="/careers">
          Careers
        </Link>
        <Link className="header__nav--link" to="/philosophy">
          Philosophy
        </Link>
        <Link className="header__nav--link" to="/news">
          News
        </Link>
        <Link className="header__nav--link" to="/rewards">
          Rewards
        </Link>
      </div>

      <div className="header__toggle">
        <img
          src={MenuBlack}
          alt="Menu"
          onClick={() =>{}}
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