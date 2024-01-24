import * as React from "react"
import { Link, navigate } from "gatsby"
import  "../assets/sass/components/header.sass"

const Header = () => {

  const main_logo = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/main-logo.png';

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
          src={ main_logo }
        />
      </Link>
  
      <div className="header__nav">
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
  
    </header>
  );
}

export default Header
