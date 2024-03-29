import * as React from "react"
import LayoutStatic from "../components/layout-static";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const codeStyles = {
    paddingTop: 200
}

const StyleGuidePage: React.FC = () => {
    return (
        <LayoutStatic>
            <div style={codeStyles}>
                <div className="container">
                    <h4>Typography</h4>
                    <hr />
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Title 1</h5>
                    <h5 className="small">Title 2</h5>
                    <h6>Title 3</h6>
                    <p>Body text 1</p>
                    <div className="cms-page">
                    <p>Body text 2</p>
                    </div>
                    <Link to="/">Menu</Link>
                    <nav className="crumbs">
                        <ul>
                            <li><Link to="/">Menu</Link></li>
                            <li><Link to="/">BMX</Link></li>
                        </ul>
                    </nav>
                    <h5>Footer</h5>
                    <p>Footer</p>

                    <br />
                    <br />
                    <h4>Buttons</h4>
                    <hr />
                    <h5>Primary</h5>    
                    <Link className="btn button btn-primary" to='#'>Our Partners</Link>
                    <br />
                    <br />
                    <Link className="btn button btn-secondary" to='#'>Our Partners</Link>
                    <br />
                    <br />
                    <div style={{backgroundColor: "black", padding: "20px "}}>
                    <Link className="btn button btn-primary btn-white" to='#'>Our Partners</Link>
                    </div>
                    <br />
                    <br />

                    <br />
                    <br />
                    <h4>Icons</h4>
                    <hr />
                    <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    </Swiper>

                    <br />
                    <br />
                    <h4>Inputs</h4>
                    <form>
                        <div className="input-row">
                            <div className="input-text col-6">
                                <label>Full Name*</label>
                                <input type="text" name="name" placeholder="Enter Your Full Name" />
                            </div>
                            <div className="input-text col-6">
                                <label>Email*</label>
                                <input type="email" name="email" placeholder="Enter Your Email" />
                            </div>
                            <div className="input-text col-6">
                                <label>Phone Number*</label>
                                <input type="tel" name="phone" className="error" placeholder="Enter Your Phone Number" defaultValue="Phone" />
                                <div className="text-error">Incorrect entry.</div>
                            </div>
                            <div className="input-text col-6">
                                <label>Subject</label>
                                <input type="text" name="subject" placeholder="Enter Your Subject" defaultValue="Sub" />
                            </div>
                            <div className="input-text col-12">
                                <label>Messages*</label>
                                <textarea name="messages" placeholder="Enter Your Messages" />
                            </div>
                            <div className="input-text col-12">
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </div>
                    </form>


                    <br />
                    <br />
                    <h4>Colors</h4>
                    <div className="color-container">
                        <h5>Primary</h5>
                        <div className="color-header">
                            <div className="color-column">
                                <div className="color-box">
                                    <div className="color">#0068FF</div>
                                    <div className="color-0068FF" />
                                </div>
                            </div>
                            <div className="color-column">
                                <div className="color-box">
                                    <div className="color">#E2E2E2</div>
                                    <div className="color-E2E2E2" />
                                </div>
                            </div>
                            <div className="color-column">
                                <div className="color-box">
                                    <div className="color">#1E1E1E</div>
                                    <div className="color-1E1E1E" />
                                </div>
                            </div>
                        </div>
                        <h5>Secondary</h5>
                        <div className="color-header">
                            <div className="color-column">
                                <div className="color-box">
                                    <div className="color">#CCB4FB</div>
                                    <div className="color-CCB4FB" />
                                </div>
                            </div>
                            <div className="color-column">
                                <div className="color-box">
                                    <div className="color">#C4F000</div>
                                    <div className="color-C4F000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutStatic>
    )
}

export default StyleGuidePage
