import * as React from "react";
import { Link } from "gatsby";
import IButton from "../../shared/model/IButton";

const ButtonsSecondary = (props: IButton) => {
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