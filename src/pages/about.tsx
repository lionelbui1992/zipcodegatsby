import React, { useEffect } from "react";
import { OurTeams } from "../components/AboutPage/OurTeams";
import { BoxImage } from "../components/AboutPage/BoxImage";
import { BannerCta } from "../components/AboutPage/BannerCta";
import { MarqueeText } from "../components/AboutPage/MarqueeText";
import { BannerTop } from "../components/AboutPage/BannerTop";
import { IPageProps } from "../shared/model/IPageProps";
import LayoutStatic from "../components/layout-static";

const About: React.FC<IPageProps> = (props: IPageProps) => {
    // const { page } = props.data
    useEffect(() => {
        const sections: HTMLElement[] = Array.from(document.getElementsByTagName("section"));
        let i: number;

        window.onscroll = function () {            
            for (i = 0; i < sections.length; i = i + 1) {                
                if (window.scrollY > sections[i].offsetTop && window.scrollY < sections[i].offsetTop + sections[i].offsetHeight) {                    
                    sections[i].classList.add("active");                    
                } else {
                    sections[i].classList.remove("active");
                }                
            }            
        }
    });

    const OurTeamsHeading = "Leave your profile to be part of our welcoming team";
    const OurTeamsContent = [
        {
            title:    "Purat Osathanugrah", 
            imgUrl:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ourteam-1.png",
            content:  "<p>Short biography of the person. A few words describing background, maybe a quote.</p>",
            position:  "Executive Director & Founder",
        },
        {
            title:    "Roong Wongsmith", 
            imgUrl:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ourteam-2.jpg",
            content:  "<p>Short biography of the person. A few words describing background, maybe a quote.</p>",
            position:  "Managing Partner and Co-Founder",
        },
        {
            title:    "Sappachoat Sawatruengphaisarn", 
            imgUrl:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ourteam-3.jpg",
            content:  "<p>Short biography of the person. A few words describing background, maybe a quote.</p>",
            position:  "Associate Manager",
        },
        {
            title:    "Natpreeya Yongdeemittapap", 
            imgUrl:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ourteam-4.jpg",
            content:  "<p>Short biography of the person. A few words describing background, maybe a quote.</p>",
            position:  "Associate Manager",
        },
        {
            title:    "Juthamat Thanomkul", 
            imgUrl:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ourteam-5.png",
            content:  "<p>Short biography of the person. A few words describing background, maybe a quote.</p>",
            position:  "Personal Assistant",
        },
    ]
    
    return (
        <LayoutStatic>
        <div className="about-page">
            <section className="about-banner-top about-section bg-black">
                <BannerTop />
            </section>
            <MarqueeText />
            <section className="about-our-teams about-section">
                <BoxImage 
                    className="box-image-left" 
                    boxImage="/about/about-box-image-1.jpg" 
                    boxIcon="column" 
                    boxTitle="Foundations of the Future" 
                    boxContent="Our current pipeline is centered around Bangkok, with expansion plans across Thailand." 
                    boxContentMobile="Places and spaces have never been as vital as they are today. Because in an increasingly virtual world, something real is of even greater value, not just as an asset but for our growth and development. Because how and why we make things is as important as what we make. " 
                    boxLinkText="View our Projects" 
                    boxLinkUrl="#" 
                />
                <div className="our-teams">
                <OurTeams 
                    OurTeamsHeading = {OurTeamsHeading}
                    OurTeamsContent = {OurTeamsContent}
                />
                </div>
            </section>
            <section className="about-banner-cta about-section">
                <BannerCta />
            </section>
            <section className="about-box-image about-section">
                <BoxImage 
                    className="box-image-right box-transformative-together" 
                    boxImage="/about/about-box-image-2.jpg" 
                    boxIcon="" 
                    boxTitle="Transformative Together" 
                    boxContent="We partner with those who share our passion for creating exceptional. Our partnerships span leading financial investors, architectural firms, landowners, tenants, operators, and landscapers. We move further together with close collaboration and a sense of shared mission." 
                    boxContentMobile="We partner with those who share our passion for creating exceptional. Our partnerships span leading financial investors, architectural firms, landowners, tenants, operators, and landscapers. We move further together with close collaboration and a sense of shared mission." 
                    boxLinkText="Our Partners" 
                    boxLinkUrl="#" 
                />
            </section>
        </div>
        </LayoutStatic>
    )
}

export default About