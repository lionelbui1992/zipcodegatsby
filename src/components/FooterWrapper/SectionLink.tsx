import React from "react";
import { Link } from "gatsby"

interface Props {
  privacyPolicy: any;
  cookiesPolicy: any;
  codeOfConduct: any;
}

export const SectionLink  = ({
  privacyPolicy,
  cookiesPolicy,
  codeOfConduct
}: Props): JSX.Element => {
  // const cookies = cookiesPolicy;
  console.log(cookiesPolicy);
  return (
    <div className="section-bottom">
        <Link to={cookiesPolicy.url}>
          {cookiesPolicy.title}
        </Link>
        <Link to={privacyPolicy.url}>
          {privacyPolicy.title}
        </Link>
        <Link to={codeOfConduct.url}>
          {codeOfConduct.title}
        </Link>
    </div>
  );
};
export default SectionLink;