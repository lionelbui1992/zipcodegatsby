import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Modal from 'react-modal';

const CookieBanner = () => {
    const getInfo = gql`
    query CookieQuery {
        cookieNotice {
            cookieNoticeFields {
                cookieBannerText
                cookieBannerTitle
                cookieContent {
                    isEditable
                    name
                    text
                    title
                }
            }
        }
    }
    `;
    const { loading, error, data } = useQuery(getInfo);

    //State
    const [cookieBannerText, setCookieBannerText] = useState("");
    const [cookieBannerTitle, setCookieBannerTitle] = useState("");
    const [cookieContent, setCookieContent] = useState([]);

    //useEffect
    useEffect(() => {
        if (!loading && !error & data) {
            setCookieBannerText(data.cookieNotice.cookieNoticeFields.cookieBannerText)
            setCookieBannerTitle(data.cookieNotice.cookieNoticeFields.cookieBannerTitle)
            setCookieContent(data.cookieNotice.cookieNoticeFields.cookieContent)
        }
    }, [data]);

    const [cookies, setCookie] = useCookies(['cookiePreferences']);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleAcceptCookies = () => {
        setCookie('cookiePreferences', { essential: true, statistics: true, marketing: false });
        setModalIsOpen(false);
    };

    const handleRejectAllCookies = () => {
        setCookie('cookiePreferences', { essential: false, statistics: false, marketing: false });
        setModalIsOpen(false);
    };

    // Check if the user has accepted essential cookies
    const hasAcceptedEssentialCookies = cookies.cookiePreferences;

    // Check if the cookie banner should be displayed
    const shouldDisplayBanner = !hasAcceptedEssentialCookies;

    return (
    <div>
        {shouldDisplayBanner && (
        <div className="cookie-banner">
            <div className="site-cookie-consent-bar">
                <div className="site-cookie-notice">
                    <p className="site-cookie-title">{cookieBannerTitle}</p>
                    <div className="site-cookie-notice-group">
                    <div className="site-cookie-notice-des">{cookieBannerText}</div>
                    <div className="site-cookie-notice-btn-wrapper" data-site-cookie-tag="notice-buttons">
                        <button className="site-cookie-btn site-cookie-btn-customize" onClick={() => setModalIsOpen(true)}>Customize</button>
                        <button className="site-cookie-btn site-cookie-btn-reject" onClick={() => {handleRejectAllCookies(); setModalIsOpen(false)}}>Reject All</button>
                        <button className="site-cookie-btn site-cookie-btn-accept" onClick={handleAcceptCookies}>Accept All</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className="cookie-banner-preference-header">
                <span className="cookie-banner-preference-title">Customize Consent Preferences</span>
                <button className="cookie-banner-btn-close" aria-label="Close" data-cookie-banner-tag="detail-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" data-tag-assistant-present="">
                        <path d="M0.572899 0.00327209C0.459691 0.00320032 0.349006 0.036716 0.254854 0.0995771C0.160701 0.162438 0.0873146 0.251818 0.0439819 0.356405C0.000649228 0.460992 -0.0106814 0.576084 0.0114242 0.687113C0.0335299 0.798142 0.0880779 0.900118 0.168164 0.980132L4.18928 5L0.168164 9.01987C0.0604905 9.12754 0 9.27358 0 9.42585C0 9.57812 0.0604905 9.72416 0.168164 9.83184C0.275838 9.93951 0.421875 10 0.574148 10C0.726422 10 0.872459 9.93951 0.980133 9.83184L5.00125 5.81197L9.02237 9.83184C9.13023 9.93836 9.2755 9.99844 9.4271 9.99923C9.5023 9.99958 9.57681 9.98497 9.6463 9.95623C9.71579 9.92749 9.77886 9.8852 9.83184 9.83184C9.93924 9.72402 9.99955 9.57804 9.99955 9.42585C9.99955 9.27367 9.93924 9.12768 9.83184 9.01987L5.81072 5L9.83184 0.980132C9.88515 0.926818 9.92744 0.863524 9.9563 0.793865C9.98515 0.724206 10 0.649547 10 0.574148C10 0.49875 9.98515 0.42409 9.9563 0.354431C9.92744 0.284772 9.88515 0.221479 9.83184 0.168164C9.77852 0.114849 9.71523 0.072558 9.64557 0.0437044C9.57591 0.0148507 9.50125 0 9.42585 0C9.35045 0 9.27579 0.0148507 9.20614 0.0437044C9.13648 0.072558 9.07318 0.114849 9.01987 0.168164L4.99813 4.19053L0.976385 0.170662C0.868901 0.0635642 0.723383 0.00338113 0.57165 0.00327209H0.572899Z" fill="#828EA2" />
                    </svg>
                </button>
            </div>
            <div className="cookie-banner-preference-body-wrapper">
                <div className="cookie-banner-preference-content-wrapper">
                    <p>We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.</p>
                    <p>The cookies that are categorized as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities of the site. ...&nbsp; <button className="cookie-banner-show-desc-btn" data-cookie-banner-tag="show-desc-button" aria-label="Show more">Show more</button>
                    </p>
                </div>
                <div className="cookie-banner-horizontal-separator"></div>
                <div className="cookie-banner-accordion-wrapper" data-cookie-banner-tag="detail-categories">
                    {/* repeater categories */}
                    <div className="cookie-banner-accordion" id="ckyDetailCategorynecessary">
                        <div className="cookie-banner-accordion-item">
                            <div className="cookie-banner-accordion-chevron">
                                <i className="cookie-banner-chevron-right"></i>
                            </div>
                            <div className="cookie-banner-accordion-header-wrapper">
                                <div className="cookie-banner-accordion-header">
                                    <button className="cookie-banner-accordion-btn">Necessary</button>
                                    <span className="cookie-banner-always-active">Always Active</span>
                                </div>
                                <div className="cookie-banner-accordion-header-des" data-cookie-banner-tag="detail-category-description">
                                    <p>Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.</p>
                                </div>
                            </div>
                        </div>
                        <div className="cookie-banner-accordion-body">
                            <div className="cookie-banner-audit-table">
                                <ul className="cookie-banner-cookie-des-table">
                                    <li>
                                        <div>Cookie</div>
                                        <div>cookieyes-consent</div>
                                    </li>
                                    <li>
                                        <div>Duration</div>
                                        <div>1 year</div>
                                    </li>
                                    <li>
                                        <div>Description</div>
                                        <div>CookieYes sets this cookie to remember users' consent preferences so that their preferences are respected on subsequent visits to this site. It does not collect or store any personal information about the site visitors.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* end repeater categories */}
                </div>
            </div>
            <div className="cookie-banner-footer-wrapper">
                <span className="cookie-banner-footer-shadow"></span>
                <div className="cookie-banner-prefrence-btn-wrapper">
                    <button className="cookie-banner-btn cookie-banner-btn-reject">Reject All </button>
                    <button className="cookie-banner-btn cookie-banner-btn-preferences">Save My Preferences </button>
                    <button className="cookie-banner-btn cookie-banner-btn-accept" onClick={handleAcceptCookies}> Accept All </button>
                </div>
            </div>
        </Modal>
    </div>
    );
};

export default CookieBanner;
