import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { AboutPage } from "../components/AboutPage"

const PrivacyPolicy: React.FC<PageProps> = () => {
  return (
    <>
      <div className="privacy-policy-page cms-page">
        <section className="section-banner">
          <div className="section-bkg">
              <img
                  loading="lazy"
                  srcSet="/img/page-privacy-policy-bkg.png"
              />
          </div>
          <div className="container">
            <h1 className="h3">Privacy policy.</h1>
          </div>
        </section>
        <section className="section-content">
          <div className="container">
            <div className="input-row">
              <div className="input-text col-heading col-6">
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h5>
              </div>
              <div className="input-text col-description col-6">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              </div>
            </div>
            <div className="input-row">
              <div className="input-text col-heading col-6">
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h6>
              </div>
              <div className="input-text col-description col-6">
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
              </div>
            </div>
            <div className="input-row">
              <div className="input-text col-heading col-6">
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h6>
              </div>
              <div className="input-text col-description col-6">
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas </p>
              </div>
            </div>          
            <div className="input-row">
              <div className="input-text col-heading col-12">
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </h5>
              </div>
            </div>
            <div className="input-row">
              <div className="input-text col-heading col-6">
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h6>
              </div>
              <div className="input-text col-description col-6">
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
              </div>
            </div>
            <div className="input-row" style={{marginTop: "17px"}}>
              <div className="input-text col-heading col-6">
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h6>
              </div>
              <div className="input-text col-description col-6">
                <ul>
                  <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</li>
                  <li>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</li>
                  <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate </li>
                </ul>
              </div>
            </div>      
            <div className="input-row" style={{marginTop: "-7px"}}>
              <div className="input-text col-heading col-12">
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h5>
              </div>
            </div>
            <div className="input-row">
              <div className="input-text col-heading col-6">
                <h6>Ut enim ad minim veniam, quis nostrud exercitation ullamco </h6>
              </div>
              <div className="input-text col-description col-6">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              </div>
            </div>
            <div className="input-row" style={{marginTop: "-5px"}}>
              <div className="input-text col-heading col-6">
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h6>
              </div>
              <div className="input-text col-description col-6">
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
              </div>
            </div>
            <div className="input-row" style={{marginTop: "-3px"}}>
              <div className="input-text col-heading col-6">
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h6>
              </div>
              <div className="input-text col-description col-6">
                <ul>
                  <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos</li>
                  <li>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora</li>
                  <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </li>
                </ul>
              </div>
            </div> 
          </div> 
        </section>
      </div>
      <style jsx>{`
        .privacy-policy-page .section-banner {
            position: relative;
            padding: 310px 0 181px;
            margin-bottom: -50px;
            z-index: -1;
        }        
        .privacy-policy-page .section-banner .section-bkg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }        
        .privacy-policy-page .section-banner h1 {
            margin: 0;
        }        
        .privacy-policy-page .section-content {
            border-radius: 31.989px 31.989px 0 0;
            background: var(--Color-neutrals-white, #FFF);
            padding: 126px 0 106px;
        }        
        .privacy-policy-page .section-banner .section-bkg img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }     
        .privacy-policy-page .input-text.col-heading {
            letter-spacing: 0;
        }
        
        .privacy-policy-page .input-text.col-heading.col-6 {
            padding-right: 12%;
            letter-spacing: 0;
        }
        .privacy-policy-page .section-content .col-description {
            padding-left: 9px;
            padding-right: 6.1%;
        }        
        .privacy-policy-page .input-text {
            margin-bottom: 58px;
        }       
        .input-text.col-heading.col-12 {
            padding-right: 15%;
            padding-top: 5px;
        }
        .privacy-policy-page .input-row:last-child .input-text {
          margin-bottom: 0;
        }
        @media (max-width: 1199px) {
          .privacy-policy-page .input-text.col-heading.col-12 ,
          .privacy-policy-page .input-text.col-heading.col-6,
          .privacy-policy-page .section-content .col-description {
              padding-right: 13.5px;
          }
          .privacy-policy-page .section-content .col-description {
            padding-left: 13.5px;
          }
        }
        @media (max-width: 767px) {
          .privacy-policy-page .section-content {
            padding: 60px 0;
          }        
          .privacy-policy-page .input-row {
            margin-top: 0 !important;
          }
          .privacy-policy-page .input-text {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </>
  );
}

export default PrivacyPolicy

export const Head: HeadFC = () => <title>Privacy Policy</title>
