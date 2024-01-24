import * as React from "react";
import { Link } from "gatsby";

const ButtonsSecondary = (props) => {
    const {
        text, url
    } = props;
    console.log(props);
    return (
        <Link className="btn button btn-secondary" to={url}>
            {text}
        </Link>
    );
};

export default ButtonsSecondary