import React from "react";
import { Divider } from "./sections/Divider";
import { OverlapGroupWrapper } from "./sections/OverlapGroupWrapper";
import "./style.sass";

export const Overlap = (): JSX.Element => {
  return (
    <div className="overlap">
      {/* <HeaderWrapper /> */}
      <img className="image" alt="Image" src="/img/image-4.png" />
      <img className="group" alt="Group" src="/img/group-278-1.svg" />
      <div className="text-wrapper-5">Consulting</div>
      <div className="text-wrapper-6">Developing</div>
      <div className="text-wrapper-7">Investing</div>
      <p className="p">
        Our business model, design and build principles, and interdisciplinary team greenlight a unique approach. It
        helps us challenge the stereotype of what it means to be a real estate developer in 21st-century Thailand.
      </p>
      <div className="a-company-like-no">
        A company
        <br />
        like no other.
      </div>
      <img className="image-2" alt="Image" src="/img/image-6.png" />
      <img className="background-x" alt="Background" src="/img/background-1920x1080-blue-texture-2.png" />
      <img className="group-2" alt="Group" src="/img/group-282.png" />
      <div className="we-build-differently">
        We build
        <br />
        differently.
      </div>
      <Divider />
      <div className="rectangle" />
      <img className="image-3" alt="Image" src="/img/image-17.png" />
      <img className="image-4" alt="Image" src="/img/image-16.png" />
      <img className="image-5" alt="Image" src="/img/image-5.png" />
      <p className="we-seek-properties">
        We seek properties with unexpected potential and transform sites into game-changing spaces.
      </p>
      <img className="mask-group" alt="Mask group" src="/img/mask-group-34.png" />
      <p className="text-wrapper-8">
        Our projects resonate with individuality yet are considerate of their surroundings.
      </p>
      <p className="text-wrapper-9">Our spaces make cities better and lift living standards.</p>
      <img className="mask-group-2" alt="Mask group" src="/img/mask-group-20.png" />
      <OverlapGroupWrapper />
    </div>
  );
};