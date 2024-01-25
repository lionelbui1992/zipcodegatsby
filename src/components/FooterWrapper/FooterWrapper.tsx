import React from "react";
import "./style.sass";

export const FooterWrapper = (): JSX.Element => {
  return (
    <footer className="overlap-group site-footer">
      <div className="overlap-2">
        <div className="overlap-3">
          <img className="graphic" alt="Graphic" src="/img/graphic-1.svg" />
          <img className="path-2" alt="Path" src="/img/path-277.svg" />
        </div>
        <div className="group-3">
          <div className="text-wrapper-11">| yourname@email.com</div>
          <div className="text-wrapper-12">→</div>
        </div>
      </div>
      <div className="overlap-4">
        <div className="text-wrapper-13">Want to hear more?</div>
        <p className="text-wrapper-14">
          Speak to us to learn more or if you are looking for something out of the ordinary.
        </p>
      </div>
      <div className="flexcontainer">
        <p className="text">
          <span className="text-wrapper-15">
            Cookies policy
            <br />
          </span>
        </p>
        <p className="text">
          <span className="text-wrapper-15">
            Privacy policy
            <br />
          </span>
        </p>
        <p className="text">
          <span className="text-wrapper-15">Code of conduct</span>
        </p>
      </div>
      <div className="flexcontainer-2">
        <p className="span-wrapper">
          <span className="text-wrapper-16">
            Email
            <br />
          </span>
        </p>
        <p className="span-wrapper">
          <span className="text-wrapper-16">LinkedIn</span>
        </p>
      </div>
    </footer>
  );
};