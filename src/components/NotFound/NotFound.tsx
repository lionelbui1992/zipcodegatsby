import React from "react";
import "./styles.sass";
import { Link } from "gatsby";

export const NotFound = (): JSX.Element => {
    return (
        <>
            <main className="page-404 not-found text-center">
                <div className="container">
                    <h1>404.</h1>
                    <h5>Page not Found.</h5>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <Link className="btn" to="/">Back to Home</Link>
                </div>
            </main>
        </>
    );
}
export default NotFound;