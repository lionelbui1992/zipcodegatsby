import React from "react";
import "./styles.sass";
import { Link } from "gatsby";

export const NotFound = (): JSX.Element => {
    return (
        <>
            <div className="page-404 not-found text-center">
                <section className="section-404">
                    <div className="section-bkg">
                        <img
                            loading="lazy"
                            srcSet="/img/page-404-bkg.svg"
                        />
                    </div>
                    <div className="container">
                        <h1>404.</h1>
                    </div>
                    <div className="main-content">
                        <div className="container">
                            <h5>Page not Found.</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                            </p>
                            <Link className="btn" to="/">Back to Home</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default NotFound;