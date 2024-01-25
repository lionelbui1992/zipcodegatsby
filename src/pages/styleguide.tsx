import * as React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import  "../assets/sass/styles.sass"
import 'swiper/css';
import 'swiper/css/navigation';

const StyleGuide = () => (
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
    <Link to="/">Go back to the homepage</Link>
    <nav class="crumbs">
      <ul>
        <li class="crumb"><Link href="#">Menu</Link></li>
        <li class="crumb"><a href="#">BMX</a></li>
        <li class="crumb">Jump Bike 3000</li>
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
    <h4>Icons</h4>
    <hr />
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
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
          <input type="tel" name="phone" className="error" placeholder="Enter Your Phone Number" value="Phone" />
          <div class="text-error">Incorrect entry.</div>
        </div>
        <div className="input-text col-6">
          <label>Subject</label>
          <input type="text" name="subject" placeholder="Enter Your Subject" value="Sub" />
        </div>
        <div className="input-text col-12">
          <label>Messages*</label>
          <textarea type="text" name="messages" placeholder="Enter Your Messages" />
        </div>
        <div className="input-text col-12">
          <button type="submit" className="btn">Submit</button>
        </div>
      </div>
    </form>


  </div>
)

// export const Head = () => <Seo title="Style Guide" />

export default StyleGuide
