import React from "react";
import "./styles.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const OurTeams = (): JSX.Element => {
    return (
        <>
            <div className="container">
                <div className="our-teams-wrapper">
                    <div className="section-heading">
                        <h2 className="h5">Rigorous Practitioners. Creative Visionaries.</h2>
                    </div>
                    <div className="section-content">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 13,
                                },
                                767:{
                                    slidesPerView: 1,
                                    spaceBetween: 13,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                1023: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                1600: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                1601: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            navigation
                            >
                            <SwiperSlide>
                                <div className="item-inner">
                                    <div className="item-image">
                                        <div className="image-inner">
                                            <img srcSet="https://s3-alpha-sig.figma.com/img/b0fd/8ea0/c49946c3b0c744b7ce0bbe84b00503e6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CcZ4IVdhV2t0HwRD2ofMZdznJAAqZ60WHNRbY9DSbTmxtZNE6n8dtERIV3K-lWHnbUxXLPmJHKOPOZoD7NiNYiZ0jYrGJdeR7H8nJyZfybMqIDsLMwhx8ZxOmly9w6XipSJWGYkuf17DPFKEvCkb3AoJ4ttkXasa9Mi3MOSj34T46CgkbUfJwonO6PhF6OCLlHZv4UP0OSM5Gnjy2RhB6g5MNLZV-ZAJfbQwDDxfBZpeGKrdbE2sBEQMm7eDQiSouG4l9iknL8YrwX0ifuPeg7lG58xvwUj1xHQTbdOCPWegLsQhEFECmdqMdpE36rDlr3qO31uUVneVvLnkKU6X6w__" 
                                                alt="Purat Osathanugrah" 
                                            />
                                        </div>
                                        <div className="item-info">
                                            <p>Short biography of the person. A few words describing background, maybe a quote.</p>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="item-name">Purat Osathanugrah</h6>
                                        <div className="item-position">Executive Director & Founder</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item-inner">
                                    <div className="item-image">
                                        <div className="image-inner">
                                            <img srcSet="https://s3-alpha-sig.figma.com/img/90e3/1d9e/f51a213882d6c0afa712e3f0ba08361c?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fBbhWB4pp6uSpLj6bT1QgA6nKihccntNvHwxdgkcWGJAAUPMpaZHD8nHmPZM1AUOBRVphm7EClahWKvx5sXhFK8B6tndJPlRpS~cJym-o57BgRNMp1LgTqDgIRW50TwZa7XRHYb3DUCXj~ytasoTPnzS881Ec5sB-NhrBnI0IH6PQOnndmR0RFRfULOD9deLfaG4H4vOdYHZ7Nm44ecECJ-f7CXRZ0AaqBi6MpQdAC0OzIVhttVfw11Zwl6Oifz06XEowyPq6oWCTjRnxHhuiAMB0ujuHengqGZ9lN7RpsAgB9SIsBj3ryyLMk8pthNAOo7KUAnaBPbEYh6sBI4yCQ__" 
                                                alt="Roong Wongsmith" 
                                            />
                                        </div>
                                        <div className="item-info">
                                            <p>Short biography of the person. A few words describing background, maybe a quote.</p>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="item-name">Roong Wongsmith</h6>
                                        <div className="item-position">Managing Partner and Co-Founder</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item-inner">
                                    <div className="item-image">
                                        <div className="image-inner">
                                            <img srcSet="https://media.licdn.com/dms/image/D4E03AQEo3YyNgiRPZA/profile-displayphoto-shrink_800_800/0/1686212047617?e=1711584000&v=beta&t=SCtcDc5HaIcQ1cnbPnbJ6H7qaAM8YpNOwVkPtjCbikY" 
                                                alt="Sappachoat Sawatruengphaisarn" 
                                            />
                                        </div>
                                        <div className="item-info">
                                            <p>Short biography of the person. A few words describing background, maybe a quote.</p>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="item-name">Sappachoat Sawatruengphaisarn</h6>
                                        <div className="item-position">Associate Manager</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item-inner">
                                    <div className="item-image">
                                        <div className="image-inner">
                                            <img srcSet="https://media.licdn.com/dms/image/C5103AQH1qvkpF8B6Zg/profile-displayphoto-shrink_800_800/0/1551262564731?e=1711584000&v=beta&t=a_8RXOoA9jeE-lnDvPU4hEQFZLk1FOW0sIl7M0sCPDE" 
                                                alt="Natpreeya Yongdeemittapap" 
                                            />
                                        </div>
                                        <div className="item-info">
                                            <p>Short biography of the person. A few words describing background, maybe a quote.</p>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="item-name">Natpreeya Yongdeemittapap</h6>
                                        <div className="item-position">Associate Manager</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item-inner">
                                    <div className="item-image">
                                        <div className="image-inner">
                                            <img srcSet="https://media.licdn.com/dms/image/D5603AQG7gdC3DWDjJg/profile-displayphoto-shrink_800_800/0/1686140029090?e=1711584000&v=beta&t=XlAiAB97qDfk5Oj387oM6sbB_KNGm8-dWh0I7pBg2jg" 
                                                alt="Juthamat Thanomkul" 
                                            />
                                        </div>
                                        <div className="item-info">
                                            <p>Short biography of the person. A few words describing background, maybe a quote.</p>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="item-name">Juthamat Thanomkul</h6>
                                        <div className="item-position">Personal Assistant</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OurTeams;