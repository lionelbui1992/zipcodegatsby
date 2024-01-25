import React from "react";
import "./style.sass";
import { Overlap } from "./Overlap";
import { ButtonsWrapper } from "./ButtonsWrapper";
import { OverlapGroup } from "./OverlapGroup";

export const HomeDesktop = (): JSX.Element => {
  return (
    <div className="home-desktop">
      <div className="div-3">
        <Overlap />
        <div className="mask-group-wrapper">
          <img className="mask-group-3" alt="Mask group" src="/img/mask-group-33.png" />
        </div>
        <p className="text-wrapper-17">Building Well with Deep Focus</p>
        <img className="mask-group-4" alt="Mask group" src="/img/mask-group-32.png" />
        <p className="text-wrapper-18">
          Zipcode builds with intention, and we explore alternative spaces and partnerships. We focus on community as
          much as construction and life quality as much as build quality.
        </p>
        <ButtonsWrapper />
        <OverlapGroup />
      </div>
    </div>
  );
};