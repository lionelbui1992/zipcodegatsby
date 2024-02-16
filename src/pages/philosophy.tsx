import * as React from "react"
import { useRef, useEffect } from "react";
import { Banner } from "../components/Philosophy/Banner";
import { ImageWithText } from "../components/Philosophy/ImageWithText";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { IPageProps } from "../shared/model/IPageProps";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Philosophy: React.FC<IPageProps> = (props: IPageProps) => {
  // const { page } = props.data
  const label = 'Perspective. Passion. Precision.';
  const bannerTitle = "Zipcode's difference lies in our design and build principles.";
  const bannerDescription = 'At our core, we are passionate creators and makers. Our design and build principles articulate our mindset, guiding how we conceptualize and deliver each project.';
  const bannerImageUrl = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-banner.jpg';
  const bannerBackground = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-banner-grid.png';

  const bgGrey ='https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-grey.png';
  const bgBlue ='https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-blue.png';

  const contents = [
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgGrey,
      isDarkBackground: false,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgBlue,
      isDarkBackground: true,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: '',
      isDarkBackground: false,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgGrey,
      isDarkBackground: false,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgBlue,
      isDarkBackground: true,
    },
  ];
  const lastItem = contents[contents.length - 1];
  const container = useRef(null);
  // useEffect(() => {

  //   if (!container) return;

  //   const absoluteSections = document.querySelectorAll('.scroll-section .relative-section');
  //   const absoluteSection = document.querySelector('.scroll-section .relative-section');
  //   const heightSection = absoluteSection.clientHeight;

  //   const totalHeight = [...absoluteSections].reduce((acc, section) => {
  //     section.classList.replace('relative-section', 'absolute-section'); // Replace class
  //     return acc + section.offsetHeight;
  //   }, 0);;

  //   document.querySelector('.pinning-2').style.height = totalHeight - heightSection + 'px';
  //   // const test = totalHeight + 'px 450px';

  //   ScrollTrigger.create({
  //     trigger: ".pinning-1",
  //     start: "top top",
  //     end: "bottom top",
  //     pin: true,
  //     pinSpacing: false,
  //     markers: false,
  //     scrub: false
  //   });

  //   let i = 0;
  //   let j = 0;
  //   const test = window.innerHeight - heightSection;
  //   var configStart = "top " + test + "px";
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".pinning-2",
  //       start: configStart,
  //       end: totalHeight,
  //       pin: true,
  //       pinSpacing: false,
  //       scrub: 0.001,
  //       markers: true,
  //     },
  //     ease: "none",
  //     smoothChildTiming: true
  //   });
    
  //   const onScrollUpSectionComplete = () => {
  //     console.log('1111');
  //   };
  //   const onScrollDownSectionComplete = () => {
  //     console.log('2222');
  //   };
    
  //   tl.to(".phi-1", { y: -heightSection * 1 })
  //     .to(".phi-2", { y: -heightSection * 2, onComplete: () => onScrollUpSectionComplete() })
  //     .to(".phi-3", { y: -heightSection * 3 })
  //     .to(".phi-4", { y: -heightSection * 4 })
  //     .to(".phi-5", { y: -heightSection * 5 })

  //   // tl.to(".phi-5", { y: -heightSection * 5 })
  //   //   .to(".phi-4", { y: -heightSection * 4 })
  //   //   .to(".phi-3", { y: -heightSection * 3 })
  //   //   .to(".phi-2", { y: -heightSection * 2, onComplete: () => onScrollDownSectionComplete() })
  //   //   .to(".phi-1", { y: -heightSection * 1 })

  //   return () => {
  //     // Kill all ScrollTriggers on unmount
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);
  // useEffect(() => {
  //   const absoluteSection = document.querySelector('.scroll-section .test');
  //   const heightSection = absoluteSection.clientHeight;
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".pinning-2",
  //       pin: true,
  //       start: "top 10%",
  //       end: "bottom bottom",
  //       //markers: true,
  //       scrub: true
  //     }
  //   });
    
  //   tl.to(".phi-1", { y: -heightSection * 1 })
  //     .to(".phi-2", { y: -heightSection * 2 })
  //     .to(".phi-3", { y: -heightSection * 3 })
  //     .to(".phi-4", { y: -heightSection * 4 });
  //     // .to(".phi-5", { y: -heightSection * 5 });
    
  // }, []);
  return (
    <Layout>
      <div className="scroll-section pinning-1" data-speed="0.2">
      <Banner 
        label={label} 
        bannerTitle={bannerTitle} 
        bannerDescription={bannerDescription} 
        bannerImageUrl={bannerImageUrl} 
        bannerBackground={bannerBackground} 
      />
      </div>
      <div className="scroll-section pinning-2 company" data-speed="0.3">
        {contents.map((list, index, contents) => (
          
          <div className={`phi-${index+1} test `} >
            <ImageWithText 
              index={index + 1}
              title={list.title} 
              des={list.des} 
              imgUrl={list.imgUrl} 
              backgroundUrl={list.backgroundUrl} 
              isDarkBackground={list.isDarkBackground}
            />
          </div>
          
        ))}
      </div>
    </Layout>
  );
}

export default Philosophy

export const Head = (props: IPageProps) => {
  const { page } = props.data
  return <SEOHead {...page} />
}
// export const query = graphql`
//   query PageContent($id: String!) {
//     page(id: { eq: $id }) {
//       id
//       title
//       slug
//       description
//       image {
//         id
//         url
//       }
//       html
//     }
//   }
// `
