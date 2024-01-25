import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.sass";

interface Props {
  property1: "navigation-hover" | "navigation";
  className: any;
  navBarHoverStateClassName: any;
  text: string;
}

export const Buttons = ({ property1, className, navBarHoverStateClassName, text = "Nav Bar" }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "navigation",
  });

  return (
    <div
      className={`buttons ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`nav-bar-hover-state ${navBarHoverStateClassName}`}>{text}</div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "navigation-hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "navigation",
      };
  }

  return state;
}

Buttons.propTypes = {
  property1: PropTypes.oneOf(["navigation-hover", "navigation"]),
  text: PropTypes.string,
};