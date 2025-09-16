import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer_bg" style={{ backgroundImage: 'url(/assets/images/background/1.jpg)' }}></div>
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row clearfix">
            {/* Big Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="main-footer_column col-lg-7 col-md-6 col-sm-12">
                  <div className="logo-widget">
                    <div className="main-footer_logo"><a href="index.html"><img src="/assets/headerLogo2_1.png" alt="" title="" style={{ backgroundColor: 'white', width: '40%', borderRadius: '10px', padding: '10px' }} /></a></div>
                    <div className="main-footer_text">
                      Puffin Group is a diversified conglomerate delivering smart solutions across agriculture, construction, energy, logistics, consulting, and trade.
                    </div>
                    {/* Social Box */}
                    <div className="main-footer_socials">
                      <span>Follow Us:</span>
                      <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                      <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                      <a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a>
                    </div>
                  </div>
                </div>
                {/* Footer Column */}
                <div className="main-footer_column col-lg-5 col-md-6 col-sm-12">
                  <div className="links-widget">
                    <h4 className="main-footer_title">Our Services</h4>
                    <ul className="main-footer_links">
                      <li><a href="puffin-agro.html">Agro-Allied</a></li>
                      <li><a href="buildwise.html">Construction</a></li>
                      <li><a href="puffin-energy.html">Energy</a></li>
                      <li><a href="laser-shield.html">Import & Export</a></li>
                      <li><a href="maz-logistics.html">Logistics</a></li>
                      <li><a href="swingtide.html">Consulting</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Big Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="main-footer_column col-lg-6 col-md-6 col-sm-12">
                  <div className="links-widget">
                    <h4 className="main-footer_title">Useful links</h4>
                    <ul className="main-footer_links">
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="#">FaQs</a></li>
                      <li><a href="about.html">Team</a></li>
                      <li><a href="#">Contact us</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Column */}
                <div className="main-footer_column col-lg-6 col-md-6 col-sm-12">
                  <div className="newsletter-widget">
                    <h4 className="main-footer_title">Newsletter</h4>
                    <div className="main-footer_text">Input your email to subscribe to our news letter</div>
                    <div className="newsletter-box">
                      <form method="post" action="contact.html">
                        <div className="form-group">
                          <input type="email" name="search-field" defaultValue="" placeholder="Enter Your Email Address" required />
                          <button type="submit" className="theme-btn btn-style-three">
                            <span className="btn-wrap">
                              <span className="text-one">Subscribe <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
                              <span className="text-two">Subscribe <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer_bottom">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            {/* Copyright */}
            <div className="main-footer_copyright">Copyright &copy; 2025 - All rights Reserved By Techlife</div>
            <ul className="main-footer_navs">
              <li><a href="contact.html">Support Center</a></li>
              <li><a href="terms.html">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
