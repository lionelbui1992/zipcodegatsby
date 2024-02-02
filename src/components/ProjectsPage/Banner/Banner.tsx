import React, { useEffect } from "react";
import "./styles.sass";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


export const Banner = (): JSX.Element => {
    useEffect(() => {
        const modalBtns: HTMLElement[] = Array.from(document.querySelectorAll(".projects-popup-item"));
        modalBtns.forEach((btn: HTMLElement) => {
            const modal: string | null = btn.getAttribute('data-popup');
                
            const modalOffsetTop = (): void => {
                const btnTop: number = btn.offsetTop;
                (document.getElementById(modal) as HTMLElement).style.cssText = "--offsetTop: " +btnTop+ 'px';
            };
                
            window.addEventListener("resize", modalOffsetTop);
            modalOffsetTop();
            
            btn.onclick = function() {
                document.querySelectorAll(".projects-popup-item").forEach((element: HTMLElement) => {
                    element.classList.remove('active-popup');
                });
                document.querySelectorAll(".projects-popup").forEach((element: HTMLElement) => {
                    element.classList.remove('active-popup');
                });
                btn.classList.add('active-popup');
                document.getElementById(modal)?.classList.add('active-popup');
                document.querySelector('html')!.classList.add('active-overlay');
            }
        });

        const closeBtns: HTMLElement[] = Array.from(document.querySelectorAll(".projects-popup-close"));
        closeBtns.forEach((btn: HTMLElement) => {
            btn.onclick = function() {
                const modal: HTMLElement | null = btn.closest('.projects-popup');
                const modalId: string | null = modal.getAttribute('id');
                document.querySelectorAll('[data-popup="'+modalId+'"]').forEach((element: HTMLElement) => {
                    element.classList.remove('active-popup');
                });
                modal?.classList.remove('active-popup');
                document.querySelector('html')!.classList.remove('active-overlay');
            }
        });
    })
    return (
        <>
            <section className="projects-banner projects-section">
                <div className="poup-overlay"></div>
                <div className="section-bkg">
                    <img loading="lazy" srcSet="/img/page-privacy-policy-bkg.png" />
                </div>
                <div className="container">
                    <div className="section-content">
                        <div className="content-inner">
                            <h1 className="title h5 small">Spaces & Places</h1>
                            <div className="projects-items text-center">
                                <div className="item projects-popup-item" data-popup="projects-popup-1">
                                    <div className="item-inner">
                                        <h3>Project<img loading="lazy" srcSet="/projects/page-projects-image-1.jpg" /> Koala</h3>
                                        <div className="subheading">A Universe within A University.</div>
                                        <button className="btn btn-secondary visible-tablet visible-mobile">Read more</button>
                                    </div>
                                </div>
                                <div className="item projects-popup-item" data-popup="projects-popup-2">
                                    <div className="item-inner">
                                        <h3>Project<img loading="lazy" srcSet="/projects/page-projects-image-2.jpg" /> Kanga</h3>
                                        <div className="subheading">A Limitless Creative Oasis</div>
                                        <button className="btn btn-secondary visible-tablet visible-mobile">Read more</button>
                                    </div>
                                </div>
                                <div className="item projects-popup-item" data-popup="projects-popup-3">
                                    <div className="item-inner">
                                        <h3>Project<img loading="lazy" srcSet="/projects/page-projects-image-3.jpg" /> Heyday</h3>
                                        <div className="subheading">An Experience Like No Other.</div>
                                        <button className="btn btn-secondary visible-tablet visible-mobile">Read more</button>
                                    </div>
                                </div>
                                <div className="item projects-popup-item" data-popup="projects-popup-4">
                                    <div className="item-inner">
                                        <h3>DIB Museum<img loading="lazy" srcSet="/projects/page-projects-image-3.jpg" /> Bangkok</h3>
                                        <div className="subheading">A Boundaryless <br />Museum-in-a District.</div>
                                        <button className="btn btn-secondary visible-tablet visible-mobile">Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-popup" id="projects-popup-1">
                    <div className="section-bkg">
                        <img loading="lazy" srcSet="/projects/projects-popup-bkg.jpg" />
                    </div>
                    <div className="container">
                        <button className="projects-popup-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 0.688749 -0.724999 0.688749 1.54163 1.86035)" stroke="#C4F000" strokeWidth="2.13437"/>
                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 -0.688749 0.724999 0.688749 1.54163 28.8958)" stroke="#C4F000" strokeWidth="2.13437"/>
                            </svg>
                        </button>
                        <div className="popup-heading">
                            <div className="heading">
                                <h4>Project Koala</h4>
                                <div className="subheading">A Universe within A University.</div>
                            </div>
                            <div className="popup-galleries">
                                <Swiper                                
                                    modules={[Navigation]}
                                    spaceBetween={20}
                                    slidesPerView="auto"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 100,
                                        },
                                        1199:{
                                            slidesPerView: 1,
                                            spaceBetween: 100,
                                        },
                                        1200: {
                                            slidesPerView: "auto",
                                            spaceBetween: 18,
                                        }
                                    }}
                                    navigation
                                >
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectKoala-image-1.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <h6>“Bangkok University's (BU) Best-in-class Student Residence”</h6>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectKoala-image-2.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>With Bangkok University's support and pre-owned land, Project Koala will offer a higher quality product that is truly integrated into the modern student lifestyle, uplifting the standard of living and learning for the student community.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectKoala-image-3.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>Without a university-backed student residence and over 37,000 students, there is a clear unaddressed gap in the market and offering.</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="popup-content visible-desktop">
                            <div className="column">
                                <h6>“Bangkok University's (BU) Best-in-class Student Residence”</h6>
                            </div>
                            <div className="column">
                                <p>With Bangkok University's support and pre-owned land, Project Koala will offer a higher quality product that is truly integrated into the modern student lifestyle, uplifting the standard of living and learning for the student community.</p>
                            </div>
                            <div className="column">
                                <p>Without a university-backed student residence and over 37,000 students, there is a clear unaddressed gap in the market and offering.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-popup" id="projects-popup-2">
                    <div className="section-bkg">
                        <img loading="lazy" srcSet="/projects/projects-popup-bkg.jpg" />
                    </div>
                    <div className="container">
                        <button className="projects-popup-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 0.688749 -0.724999 0.688749 1.54163 1.86035)" stroke="#C4F000" strokeWidth="2.13437"/>
                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 -0.688749 0.724999 0.688749 1.54163 28.8958)" stroke="#C4F000" strokeWidth="2.13437"/>
                            </svg>
                        </button>
                        <div className="popup-heading">
                            <div className="heading">
                                <h4>Project Kanga</h4>
                                <div className="subheading">A Limitless Creative Oasis</div>
                            </div>
                            <div className="popup-galleries">
                                <Swiper                                
                                    modules={[Navigation]}
                                    spaceBetween={20}
                                    slidesPerView="auto"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 100,
                                        },
                                        1199:{
                                            slidesPerView: 1,
                                            spaceBetween: 100,
                                        },
                                        1200: {
                                            slidesPerView: "auto",
                                            spaceBetween: 18,
                                        }
                                    }}
                                    navigation
                                >
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectKanga-image-1.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                <p><span className="h6">“Bangkok University's (BU) Best-in-class Student Residence”</span> in the heart of Bangkok, Kanga is Hybrid Space for Productivity, Creativity and Lifelong Learning. </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectKanga-image-2.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>A mixed-use development offering new generation approach to of office spaces, learning zone, art spaces, retail, food & beverage along with an   active zone for sports and pet zone. </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectKanga-image-3.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>Inspired to serve the needs of the city, Kanga offers a wide range of unique activities for you and your important ones to have fun, recharge & relax, learn, and discover the undiscovered. </p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="popup-content visible-desktop">
                            <div className="column">
                                <p><span className="h6">“Bangkok University's (BU) Best-in-class Student Residence”</span> in the heart of Bangkok, Kanga is Hybrid Space for Productivity, Creativity and Lifelong Learning. </p>
                            </div>
                            <div className="column">
                                <p>A mixed-use development offering new generation approach to of office spaces, learning zone, art spaces, retail, food & beverage along with an active zone for sports and pet zone. </p>
                            </div>
                            <div className="column">
                                <p>Inspired to serve the needs of the city, Kanga offers a wide range of unique activities for you and your important ones to have fun, recharge & relax, learn, and discover the undiscovered. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-popup" id="projects-popup-3">
                    <div className="section-bkg">
                        <img loading="lazy" srcSet="/projects/projects-popup-bkg.jpg" />
                    </div>
                    <div className="container">
                        <button className="projects-popup-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 0.688749 -0.724999 0.688749 1.54163 1.86035)" stroke="#C4F000" strokeWidth="2.13437"/>
                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 -0.688749 0.724999 0.688749 1.54163 28.8958)" stroke="#C4F000" strokeWidth="2.13437"/>
                            </svg>
                        </button>
                        <div className="popup-heading">
                            <div className="heading">
                                <h4>Project Heyday</h4>
                                <div className="subheading">An Experience Like No Other. </div>
                            </div>
                            <div className="popup-galleries">
                                <Swiper                                
                                    modules={[Navigation]}
                                    spaceBetween={20}
                                    slidesPerView="auto"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 100,
                                        },
                                        1199:{
                                            slidesPerView: 1,
                                            spaceBetween: 100,
                                        },
                                        1200: {
                                            slidesPerView: "auto",
                                            spaceBetween: 18,
                                        }
                                    }}
                                    navigation
                                >
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectHeyday-image-1.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>We provided amenities and shops that will <strong>recharge student’s batteries after a long day on campus.</strong></p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectHeyday-image-2.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>With easy access within walking distance from the campus, students will enjoy our shops and restaurants, shared dining space, co-working space, and outdoor area with events and workshops that support their lifestyle activities.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectHeyday-image-3.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>More text needed</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="popup-content visible-desktop">
                            <div className="column">
                                <p>We provided amenities and shops that will <strong>recharge student’s batteries after a long day on campus.</strong></p>
                            </div>
                            <div className="column">
                                <p>With easy access within walking distance from the campus, students will enjoy our shops and restaurants, shared dining space, co-working space, and outdoor area with events and workshops that support their lifestyle activities.</p>
                            </div>
                            <div className="column">
                                <p>More text needed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-popup" id="projects-popup-4">
                    <div className="section-bkg">
                        <img loading="lazy" srcSet="/projects/projects-popup-bkg.jpg" />
                    </div>
                    <div className="container">
                        <button className="projects-popup-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 0.688749 -0.724999 0.688749 1.54163 1.86035)" stroke="#C4F000" strokeWidth="2.13437"/>
                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 -0.688749 0.724999 0.688749 1.54163 28.8958)" stroke="#C4F000" strokeWidth="2.13437"/>
                            </svg>
                        </button>
                        <div className="popup-heading">
                            <div className="heading">
                                <h4>DIB Museum Bangkok</h4>
                                <div className="subheading">A Boundaryless Museum-in-a District.</div>
                            </div>
                            <div className="popup-galleries">
                                <Swiper                                
                                    modules={[Navigation]}
                                    spaceBetween={20}
                                    slidesPerView="auto"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 100,
                                        },
                                        1199:{
                                            slidesPerView: 1,
                                            spaceBetween: 100,
                                        },
                                        1200: {
                                            slidesPerView: "auto",
                                            spaceBetween: 18,
                                        }
                                    }}
                                    navigation
                                >
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectHeyday-image-1.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>We provided amenities and shops that will <strong>recharge student’s batteries after a long day on campus.</strong></p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectHeyday-image-2.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>With easy access within walking distance from the campus, students will enjoy our shops and restaurants, shared dining space, co-working space, and outdoor area with events and workshops that support their lifestyle activities.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-gallery">
                                            <img loading="lazy" srcSet="/projects/ProjectHeyday-image-3.png" />
                                        </div>
                                        <div className="popup-content visible-mobile">
                                            <p>More text needed</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="popup-content visible-desktop">
                            <div className="column">
                                <p>We provided amenities and shops that will <strong>recharge student’s batteries after a long day on campus.</strong></p>
                            </div>
                            <div className="column">
                                <p>With easy access within walking distance from the campus, students will enjoy our shops and restaurants, shared dining space, co-working space, and outdoor area with events and workshops that support their lifestyle activities.</p>
                            </div>
                            <div className="column">
                                <p>More text needed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Banner;