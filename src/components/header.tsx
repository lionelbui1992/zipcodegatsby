import React from "react";
import { HeaderInner } from "./Header/headerInner";
import "../assets/sass/header.sass";

export default function Header(): JSX.Element {
  const main_logo_black = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/main-logo-black.svg';
  const main_logo_white = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/main-logo-white.svg';
  
  return (
    <HeaderInner
      mainLogoBlack={`${main_logo_black}`}
      mainLogoWhite={`${main_logo_white}`}
    />
  );
};