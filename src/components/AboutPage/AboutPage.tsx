import React from "react";
import "./styles.sass";
import { OurTeams } from "./OurTeams";
import { BoxImage } from "./BoxImage";
import { BannerCta } from "./BannerCta";
import { BannerTop } from "./BannerTop";
import { MarqueeText } from "./MarqueeText";

export const AboutPage = (): JSX.Element => {
    return (
        <main className="about-page">
            <section className="about-banner-top about-section bg-black">
                <BannerTop />
            </section>
            <MarqueeText />
            <section className="about-our-teams about-section">
                <BoxImage 
                    className="box-image-left" 
                    boxImage="https://s3-alpha-sig.figma.com/img/5053/4969/ae7045a5db9a4c15c0a105fe9425c9bb?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D-ySdWaXd3eotFLSaPdF3qCgb9N0twfN1-qMTSlql0BmTsEgwrD38QMXw0DGDDmwOyi6KP5-3CKFXYjteosg0NOfVD6T3Ii72kFqHGE7oJrLONI36nj~uNjL2bXmhYN-Bng9KOAV6vjtViXcwuP-Jqk93NmOh0VDMay9~Cnv10hzSB88LQm0mN2~6ezgy42krfxiyCBL-lIui8RfulbNCOzooNDnTN~k8WU073OXt7gAlL18DoMAPbNbnuvCW17sX~KLAleQ9F0tz4AvOniRop9wLy8OA-G0U93bEJrCFsaHyPLstkGPrlN664xli3Zs-XtJBPzyxy9lSK-c6JWpdA__" 
                    boxIcon="column" 
                    boxTitle="Foundations of the Future" 
                    boxContent="Our current pipeline is centered around Bangkok, with expansion plans across Thailand." 
                    boxContentMobile="Places and spaces have never been as vital as they are today. Because in an increasingly virtual world, something real is of even greater value, not just as an asset but for our growth and development. Because how and why we make things is as important as what we make. " 
                    boxLinkText="View our Projects" 
                    boxLinkUrl="#" 
                />
                <div className="our-teams">
                    <OurTeams />
                </div>
            </section>
            <section className="about-banner-cta about-section">
                <BannerCta />
            </section>
            <section className="about-box-image about-section">
                <BoxImage 
                    className="box-image-right box-transformative-together" 
                    boxImage="https://s3-alpha-sig.figma.com/img/adab/28b2/1c4604bf9b29f50979e07c3a9adff291?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auP4dtub17RLZsKUSQNChZjEU1PjOcqnZThlrrvS8vqPYmYf-Bi6oplbzz2TG2rAI4b8CEp2TRDCpsnAlBymxxp-N8-0NYSqHw8UadwjxBiWjU7z9GU5ya7o6WYvfri~0E8bC2bsr1cYye~pOKeVsjZAB8YkUROKpFEvoPUdbXTiWpAF2xrV8BwK~mZtmzqHf6Ri7UV0tlfHiO5ElyxpFpuQfed9iLz6vzc6IGzFQbx1d~jKyxlUOphHxoMocaxI1ekL5jzuVd4KtWMz8bcWbFuMFDqVwwn6JVHQbk-WBOJriJlZFyrFAk8QDai6H7YHBRDy49emyak7TuSXtRfa5w__" 
                    boxIcon="" 
                    boxTitle="Transformative Together" 
                    boxContent="We partner with those who share our passion for creating exceptional. Our partnerships span leading financial investors, architectural firms, landowners, tenants, operators, and landscapers. We move further together with close collaboration and a sense of shared mission." 
                    boxContentMobile="We partner with those who share our passion for creating exceptional. Our partnerships span leading financial investors, architectural firms, landowners, tenants, operators, and landscapers. We move further together with close collaboration and a sense of shared mission." 
                    boxLinkText="Our Partners" 
                    boxLinkUrl="#" 
                />
            </section>
        </main>
    );
};