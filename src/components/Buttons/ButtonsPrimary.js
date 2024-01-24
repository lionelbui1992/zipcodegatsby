import * as React from "react"
import { Link } from "gatsby"

const ButtonsPrimary = (props) => {
    const {
        text, url
    } = props;
    console.log(props);
    return (
        <Link className="btn button btn-primary" to={url}>
            {text}
        </Link>
    );
};


export default ButtonsPrimary