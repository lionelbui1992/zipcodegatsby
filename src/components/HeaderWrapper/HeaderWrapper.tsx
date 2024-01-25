import React from "react";
import { Header } from "../Header";
import "./style.sass";

export const HeaderWrapper = (): JSX.Element => {
  const main_logo_black = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/main-logo.png';
  const main_logo_white = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/main-logo-white.png';
  
  return (
    <Header
      mainLogoBlack={`${main_logo_black}`}
      mainLogoWhite={`${main_logo_white}`}
    />
  );
};