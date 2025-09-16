import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const TestimonialSlider = () => {
  return (
    <section className="testimonial-one">
      <div className="testimonial-one_circle"></div>
      <div className="auto-container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          {/* Testimonial One Options */}
          <div className="testimonial-one_options d-flex align-items-center flex-wrap">
            <div className="testimonial-one_reviews">
              3.6K Reviews
              <div className="rating">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <ul className="testimonial-one__authors">
              <li><img src="/assets/images/icon/avatar.png" alt="" /></li>
            </ul>
            <div className="testimonial-one__trusted">
              Trusted by
              <span>global industry leaders</span>
            </div>
          </div>
          {/* End Testimonial One Options */}
          {/* Testimonial One Button */}
          <div className="testimonial-one_button">
            <a href="testimonial.html" className="theme-btn btn-style-three">
              <span className="btn-wrap">
                <span className="text-one">Discover More <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
                <span className="text-two">Discover More <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
              </span>
            </a>
          </div>
          {/* End Testimonial One Button */}
        </div>
        <div className="testimonial-one_carousel">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.single-item_carousel-next',
              prevEl: '.single-item_carousel-prev',
            }}
            pagination={{
              el: ".single-item_carousel-pagination",
              clickable: true,
            }}
            className="single-item_carousel"
          >
            <SwiperSlide>
              <div className="testimonial-block_one">
                <div className="testimonial-block_one-inner">
                  <div className="testimonial-block_one-text">“Puffin Group has consistently demonstrated a deep understanding of the sectors they operate in. From construction to energy and logistics, their professionalism and ability to collaborate across multiple industries have made them an invaluable partner on our large-scale projects.”</div>
                  <div className="testimonial-block_one-designation">
                    David Paul <span>Senior Project Engineer, ZenithBuild Infrastructure Ltd</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more slides as needed */}
             <SwiperSlide>
              <div className="testimonial-block_one">
                <div className="testimonial-block_one-inner">
                  <div className="testimonial-block_one-text">“The team at Puffin Group is exceptional. Their commitment to quality and innovation is evident in every project they undertake. We are proud to be associated with them.”</div>
                  <div className="testimonial-block_one-designation">
                    Jane Doe <span>CEO, Innovate Inc.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
