import * as React from "react"
import { Link } from "gatsby"
import IButton from "../../shared/model/IButton";


const ButtonsPrimary = (props: IButton) => {
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