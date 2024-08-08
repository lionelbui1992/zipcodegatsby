import React from 'react';
import { Helmet } from "react-helmet";

function Seo() {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="google-site-verification" content="aHpqtzVNKFwzLuHj_c3xgbBLzn8o6zolWqk4YVaVt10" />
            <noscript>
                {`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N797JN7T"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
            </noscript>
        </Helmet>
    );
}

export default Seo;
