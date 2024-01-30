import React from "react";
import { Link } from "gatsby"

export const SectionLink = (): JSX.Element => {
  return (
    <div className="section-bottom">
        <Link to="/cookies-policy">
        Cookies policy
        </Link>
        <Link to="/privacy-policy">
        Privacy policy
        </Link>
        <Link to="/code-of-conduct">
        Code of conduct
        </Link>
    </div>
  );
};
export default SectionLink;