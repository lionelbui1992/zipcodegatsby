import React from "react";
import "./styles.sass";
import { Link } from "gatsby";

export const NotFound = (): JSX.Element => {
    return (
        <>
            <div className="pinning" data-speed="0.8">
                <div className="main-banner-top" style={{ backgroundImage: `url(https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-banner-grid.png)` }}>
                    <div className="container">
                        <h1>404.</h1>
                    </div>
                </div>
            </div>
            <div className="main-content" data-speed="0.8" style={{ backgroundImage: `url(https://maasi2404zip.merket.io/wp-content/uploads/2024/02/bkg-404-content.png)` }}>
                <div className="container">
                    <h5>Page not Found.</h5>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <Link className="btn" to="/">Back to Home</Link>
                </div>
            </div>
        </>
    );
}
export default NotFound;