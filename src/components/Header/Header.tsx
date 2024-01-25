import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../icons/Logo";
import { Buttons } from "../Buttons";
import "./style.sass";

interface Props {
  property1: "desktop";
  className: any;
  frameClassName: any;
  logoStyleOverrideClassName: any;
  frameClassNameOverride: any;
  buttonsPropertyClassName: any;
  buttonsNavBarHoverStateClassName: any;
  buttonsPropertyClassNameOverride: any;
  buttonsNavBarHoverStateClassNameOverride: any;
  buttonsNavBarHoverStateWrapperClassName: any;
  buttonsProperty1: string;
  buttonsDivClassName: any;
  buttonsNavBarHoverStateWrapperClassNameOverride: any;
  buttonsDivClassNameOverride: any;
  buttonsPropertyClassName1: any;
  buttonsNavBarHoverStateClassName1: any;
  buttonsPropertyClassName2: any;
  buttonsNavBarHoverStateClassName2: any;
  lineClassName: any;
  line: string;
}

export const Header = ({
  property1,
  className,
  frameClassName,
  logoStyleOverrideClassName,
  frameClassNameOverride,
  buttonsPropertyClassName,
  buttonsNavBarHoverStateClassName,
  buttonsPropertyClassNameOverride,
  buttonsNavBarHoverStateClassNameOverride,
  buttonsNavBarHoverStateWrapperClassName,
  buttonsProperty1 = "navigation",
  buttonsDivClassName,
  buttonsNavBarHoverStateWrapperClassNameOverride,
  buttonsDivClassNameOverride,
  buttonsPropertyClassName1,
  buttonsNavBarHoverStateClassName1,
  buttonsPropertyClassName2,
  buttonsNavBarHoverStateClassName2,
  lineClassName,
  line = "/img/line-13.svg",
}: Props): JSX.Element => {
  return (
    <div className={`header ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <Logo className={logoStyleOverrideClassName} />
        <div className={`div ${frameClassNameOverride}`}>
          <Buttons
            className={buttonsPropertyClassName}
            navBarHoverStateClassName={buttonsNavBarHoverStateClassName}
            property1="navigation"
            text="About"
          />
          <Buttons
            className={buttonsPropertyClassNameOverride}
            navBarHoverStateClassName={buttonsNavBarHoverStateClassNameOverride}
            property1="navigation"
            text="Projects"
          />
          <Buttons
            className={buttonsNavBarHoverStateWrapperClassName}
            navBarHoverStateClassName={buttonsDivClassName}
            property1={buttonsProperty1}
            text="Careers"
          />
          <Buttons
            className={buttonsNavBarHoverStateWrapperClassNameOverride}
            navBarHoverStateClassName={buttonsDivClassNameOverride}
            property1="navigation"
            text="Philosophy"
          />
          <Buttons
            className={buttonsPropertyClassName1}
            navBarHoverStateClassName={buttonsNavBarHoverStateClassName1}
            property1="navigation"
            text="News"
          />
          <Buttons
            className={buttonsPropertyClassName2}
            navBarHoverStateClassName={buttonsNavBarHoverStateClassName2}
            property1="navigation"
            text="Contact us"
          />
        </div>
      </div>
      <img className={`line ${lineClassName}`} alt="Line" src={line} />
    </div>
  );
};

Header.propTypes = {
  property1: PropTypes.oneOf(["desktop"]),
  buttonsProperty1: PropTypes.string,
  line: PropTypes.string,
};