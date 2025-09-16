import React, { useEffect } from 'react';
import TestimonialSlider from '../components/TestimonialSlider';
import Services from '../components/Services';
import TitleAnim from '../components/TitleAnim';
import ProjectCarousel from '../components/ProjectCarousel';

const Home = () => {
  useEffect(() => {
    document.querySelectorAll(".accordion .acc-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const parent = btn.closest(".accordion");
        const all = document.querySelectorAll(".accordion");

        all.forEach(function (item) {
          if (item !== parent) {
            item.classList.remove("active-block");
            item.querySelector(".acc-btn").classList.remove("active");
            item.querySelector(".acc-content").classList.remove("current");
          }
        });

        parent.classList.toggle("active-block");
        btn.classList.toggle("active");
        parent.querySelector(".acc-content").classList.toggle("current");
      });
    });
  }, []);

  return (
    <div className="page-wrapper">
      {/* Cursor */}
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      {/* Cursor End */}

      

      

      {/* Hero Video Banner */}
      <section className="video-hero-banner">
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/assets/videos/banner.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Gradient */}
        <div className="overlay"></div>
        {/* Hero Content */}
        <div className="hero-content">
          <img src="/assets/images/favicon.png" alt="Puffin Group Logo" className="hero-logo" />
          <h1>Building a Smarter Africa</h1>
          <p>
            Agriculture | Energy | Construction | Logistics | Consulting | Imports & Exports
          </p>
        </div>
      </section>
      {/* End Main Slider Section */}

      {/* About One */}
      <section className="about-one">
        <div className="about-one_pattern-layer" style={{ backgroundImage: 'url(/assets/images/background/pattern-1.png)' }}></div>
        <div className="about-one_cap" style={{ backgroundImage: 'url(/assets/images/icons/about-cap.png)' }}></div>
        <div className="auto-container">
          <div className="sec-title">
            <TitleAnim><div className="sec-title_title">WHO WE ARE</div></TitleAnim>
            <TitleAnim><h3 className="sec-title_heading">Puffin Group is a diversified conglomerate delivering smart solutions across agriculture, construction, energy, logistics, consulting, and trade.</h3></TitleAnim>
          </div>
          <div className="row clearfix">
            {/* Image Column */}
            <div className="about-one_image-column col-lg-7 col-md-12 col-sm-12">
              <div className="about-one_image-outer">
                <div className="row clearfix">
                  <div className="column col-lg-4 col-md-6 col-sm-6">
                    <div className="image">
                      <img src="/assets/images/resource/about-7.jpg" alt="" />
                    </div>
                    {/* Button Box */}
                    <div className="about-one_button">
                      <a href="about.html" className="theme-btn btn-style-three">
                        <span className="btn-wrap">
                          <span className="text-one">learn more <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
                          <span className="text-two">learn more <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="column col-lg-8 col-md-6 col-sm-6">
                    <div className="image">
                      <img src="/assets/subs/puffingroup/PG4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="about-one_content-column col-lg-5 col-md-12 col-sm-12">
              <div className="about-one_content-outer">
                {/* Feature Block One */}
                <div className="feature-block_one">
                  <h4 className="feature-block_one-title">Our mission</h4>
                  <div className="feature-block_one-text">Our core mission is to provide superior, and reliable experience for all our customers across communities, states, region, and countries through smart, innovative and professional approach</div>
                </div>
                {/* Feature Block One */}
                <div className="feature-block_one">
                  <h4 className="feature-block_one-title">Our vision</h4>
                  <div className="feature-block_one-text">In line with our Mission, we aspire to be a renowned and reliable key player in all relevant industries to our subsidiaries by providing quality, innovative, and timely solutions to people across communities, states, and regions of the world.</div>
                </div>
                <div className="row clearfix">
                  {/* Feature Block Two */}
                  <div className="feature-block_two col-lg-6 col-md-6 col-sm-6">
                    <div className="feature-block_two-inner">
                      <h4 className="feature-block_two-title">global reach</h4>
                      <div className="feature-block_two-icon">
                        <i><img src="/assets/images/icons/feature-1.svg" alt="" /></i>
                      </div>
                      <div className="feature-block_two_count"><sup>5</sup></div>
                      <div className="feature-block_two_text">offices worldwide</div>
                    </div>
                  </div>
                  {/* Feature Block Two */}
                  <div className="feature-block_two col-lg-6 col-md-6 col-sm-6">
                    <div className="feature-block_two-inner">
                      <h4 className="feature-block_two-title">local expertise</h4>
                      <div className="feature-block_two-icon">
                        <i><img src="/assets/images/icons/feature-2.svg" alt="" /></i>
                      </div>
                      <div className="feature-block_two_count"><sup>100+</sup></div>
                      <div className="feature-block_two_text">employees</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About One */}

      <Services />

      <ProjectCarousel />

      <TestimonialSlider />

      {/* Counter One */}
      <section className="counter-one" style={{ marginTop: '15px' }}>
        <div className="counter-one_pattern" style={{ backgroundImage: 'url(/assets/images/background/pattern-3.png)' }}></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Counter One */}
            <div className="counter-block_one col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_one-outline"></div>
                <div className="counter-block_one-count"><sup>350+</sup></div>
                <div className="counter-block_one-text">completed <br /> projects</div>
              </div>
            </div>
            {/* Counter One */}
            <div className="counter-block_one col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_one-outline"></div>
                <div className="counter-block_one-count"><sup>50+</sup></div>
                <div className="counter-block_one-text">projects in <br /> development</div>
              </div>
            </div>
            {/* Counter One */}
            <div className="counter-block_one col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_one-outline"></div>
                <div className="counter-block_one-count"><sup>500K+</sup></div>
                <div className="counter-block_one-text">Metric Tons Moved <br /> </div>
              </div>
            </div>
            {/* Counter One */}
            <div className="counter-block_one col-lg-3 col-md-6 col-sm-12">
              <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="counter-block_one-outline"></div>
                <div className="counter-block_one-count"><sup>30+</sup></div>
                <div className="counter-block_one-text">Corporate Partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counter One */}

      {/* Faq One */}
      <section className="faq-one">
        <div className="faq-one_pattern" style={{ backgroundImage: 'url(/assets/images/background/pattern-4.png)' }}></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Accordian Column */}
            <div className="faq-one_accordian-column col-lg-7 col-md-12 col-sm-12">
              <div className="faq-one_accordian-outer">
                <div className="sec-title">
                  <TitleAnim><div className="sec-title_title">
                    FaQ's
                  </div></TitleAnim>
                  <TitleAnim><h2 className="sec-title_heading">Frequently Asked Questions</h2></TitleAnim>
                </div>
                {/* Accordion Box */}
                <ul className="accordion-box">
                  <div className="row">
                    <div className="col-md-6">
                      <li className="accordion block active-block">
                        <div className="acc-btn active">
                          <div className="icon-outer"><span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span></div>
                          WHAT DOES PUFFIN GROUP DO?
                        </div>
                        <div className="acc-content current">
                          <div className="content">
                            <div className="text">Puffin Group provides innovative services in multiple industries <a href="about.html">More</a>.</div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="col-md-6">
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer"><span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span></div>
                          WHAT ARE THE NAMES OF PUFFIN GROUP SUBSIDIARIES?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">Our subsidiaries are; Buildwise Construction, Puffin Agro Allied and General Services, Puffin Energy, Swingtide Consulting LTD, Laser Shield LTD, Maz Logistics</div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer"><span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span></div>
                          WHERE CAN I FIND PUFFIN OFFICES?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">We have our offices located at;<br />
                              No. 22 Mambilla street Aso Drive, Abuja.<br />
                              No. 21 Mukhtar Muhammad Link, Off Ahmadu Bello Way, Kano.</div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="col-md-6">
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer"><span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span></div>
                          WHAT ARE YOUR HOURS OF OPERATION?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">We are open 09am to 5pm daily from Monday – Friday (excluding public holidays).</div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer"><span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span></div>
                          HOW CAN I CONTACT YOU FOR BUSINESS?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">Visit our website at puffingroupltd.com or email us at info@puffingroupltd.com or call +2347074404041.</div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="col-md-6">
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer"><span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span></div>
                          Can Puffin Group handle government and large-scale corporate projects?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">Absolutely! All our subsidiaries are well-equipped to execute large-scale projects in both public and private sectors, ranging from supplies, to consultancy services, infrastructure development and renewable energy installations.</div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer"><span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span></div>
                          What makes Puffin Group different from others?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">We combine multi-industry expertise, a customer-centric approach, and smart innovation to deliver quality, timely, and sustainable solutions. Our diverse team and solid value system (SCOTAQ) ensure quality and excellence with every project.</div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="col-md-6">
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-outer"><span className="icon fa-classic fa-solid fa-arrow-right fa-fw"></span></div>
                          How can I join your team?
                        </div>
                        <div className="acc-content">
                          <div className="content">
                            <div className="text">All Puffin Group’s vacancies are advertised on job platforms. Kindly look out for our adverts and apply. You will be contacted by a member of the team if considered to be suitable for the advertised position.</div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div id="clients-slider-container">
            <div id="clients-slider">
              <div className="slide"><img src="/assets/partners/bankofindustry.png" alt="Client 1" /></div>
              <div className="slide"><img src="/assets/partners/jaizbank.png" alt="Client 2" /></div>
              <div className="slide"><img src="/assets/partners/kadunastate.jpeg" alt="Client 3" /></div>
              <div className="slide"><img src="/assets/partners/kanostate.jpeg" alt="Client 4" /></div>
              <div className="slide"><img src="/assets/partners/sofadric.png" alt="Client 5" /></div>
              <div className="slide"><img src="/assets/partners/access.png" alt="Client 6" /></div>
              <div className="slide"><img src="/assets/partners/custom.png" alt="Client 7" /></div>
              <div className="slide"><img src="/assets/partners/firs.jpeg" alt="Client 8" /></div>
              <div className="slide"><img src="/assets/partners/ministryofindustry.png" alt="Client 9" /></div>
              <div className="slide"><img src="/assets/partners/nepc.jpeg" alt="Client 10" /></div>
              <div className="slide"><img src="/assets/partners/nepza.png" alt="Client 11" /></div>
              <div className="slide"><img src="/assets/partners/roadsafety.jpeg" alt="Client 12" /></div>
              <div className="slide"><img src="/assets/partners/transportation.jpeg" alt="Client 13" /></div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '16px', color: '#555' }}>We’re proud to partner with best-in-class clients</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Faq One */}

      {/* Contact One */}
      <section className="contact-one">
        <div className="auto-container">
          <div className="sec-title">
            <div className="d-flex justify-content-between align-items-end flex-wrap">
              <div className="left-box">
                <div className="sec-title_title">contact us</div>
                <h2 className="sec-title_heading">Let’s Work Together</h2>
              </div>
              <div className="right-box">
                <div className="sec-title_text">We’d love to share more with you, please complete this form and<br /> our dedicated team will get back to you shortly.</div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            {/* Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Info Block One */}
                <div className="info-block_one col-lg-6 col-md-6 col-sm-6">
                  <div className="info-block_one-inner">
                    <div className="info-block_one-icon fa-classic fa-solid fa-phone fa-fw"></div>
                    <strong>Call Us</strong>
                    +2347074404041
                  </div>
                </div>
                {/* Info Block One */}
                <div className="info-block_one col-lg-6 col-md-6 col-sm-6">
                  <div className="info-block_one-inner">
                    <div className="info-block_one-icon fa-classic fa-solid fa-envelope fa-fw"></div>
                    <strong>Our Email Us</strong>
                    info@puffingroupltd.com
                  </div>
                </div>
                {/* Info Block One */}
                <div className="info-block_one col-lg-6 col-md-6 col-sm-6">
                  <div className="info-block_one-inner">
                    <div className="info-block_one-icon fa-classic fa-solid fa-clock fa-fw"></div>
                    <strong>Opening Hours</strong>
                    Mon - Fri: 09am - 06pm
                  </div>
                </div>
                {/* Info Block One */}
                <div className="info-block_one col-lg-6 col-md-6 col-sm-6">
                  <div className="info-block_one-inner">
                    <div className="info-block_one-icon fa-classic fa-solid fa-map fa-fw"></div>
                    <strong>Abuja</strong>
                    No.22 Mambilla streat Aso Drive.
                    <strong>Kano</strong>
                    No.21 Mukhtar Muhammad Link, Off Ahmadu Bello Way.
                  </div>
                </div>
              </div>
            </div>
            {/* Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              {/* Contact Form */}
              <div className="contact-form">
                <form method="post" action="#" id="contact-form">
                  <div className="row clearfix">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="username" placeholder="First Name" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="lastname" placeholder="Last Name" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="email" name="email" placeholder="Email address" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="services" placeholder="Purpose" required />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea className="" name="message" placeholder="Your Massage"></textarea>
                    </div>
                    <div className="form-group">
                      <div className="d-flex justify-content-between align-items-end flex-wrap">
                        <div className="contact-form_text">We're excited to connect with you! </div>
                        {/* Button Box */}
                        <button className="theme-btn btn-style-three">
                          <span className="btn-wrap">
                            <span className="text-one">Contact Now <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
                            <span className="text-two">Contact Now <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="video-image expand-section">
            <img src="/assets/photos/17.jpg" alt="" />
            <a href="https://www.youtube.com" className="contact-one_video lightbox-video"><span className="fa-classic fa-solid fa-play fa-fw"><i className="ripple"></i></span></a>
          </div>
        </div>
      </section>
      {/* End Contact One */}

      

      {/* Search Popup */}
      <div className="search-popup">
        <div className="color-layer"></div>
        <button className="close-search"><span className="fa-xmark"></span></button>
        <form method="post" action="blog.html">
          <div className="form-group">
            <input type="search" name="search-field" defaultValue="" placeholder="Search Here" required="" />
            <button className="fa fa-solid fa-magnifying-glass fa-fw" type="submit"></button>
          </div>
        </form>
      </div>
      {/* End Search Popup */}

      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
