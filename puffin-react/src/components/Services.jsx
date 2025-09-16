import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Construction',
    link: '/buildwise',
    image: '/assets/subs/buildwise.png'
  },
  {
    title: 'Energy',
    link: '/puffin-energy',
    image: '/assets/subs/ENERGY.png'
  },
  {
    title: 'Agriculture',
    link: '/puffin-agro',
    image: '/assets/subs/agro.png'
  },
  {
    title: 'Imports & Exports',
    link: '/laser-shield',
    image: '/assets/subs/laser.png'
  },
  {
    title: 'Logistics',
    link: '/maz-logistics',
    image: '/assets/subs/maz.png'
  },
  {
    title: 'Consultancy',
    link: '/swingtide',
    image: '/assets/subs/CONSULTING.png'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="service-one">
      <div className="service-one_shadow" style={{ backgroundImage: 'url(/assets/images/background/service-one_shadow.png)' }}></div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="service-one_pattern-layer" style={{ backgroundImage: 'url(/assets/images/background/pattern-2.png)' }}></div>
          <div className="row clearfix">
            {/* Content Column */}
            <div className="service-one_content-column col-lg-7 col-md-12 col-sm-12">
              <div className="service-one_content-outer">
                {/* Sec Title */}
                <div className="sec-title light title-anim">
                  <div className="sec-title_title">
                    Our Services
                  </div>
                  <h2 className="sec-title_heading">Services we offer</h2>
                </div>
                <div className="service-one_titles">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`service-one_title ${activeService.title === service.title ? 'active' : ''}`}
                      onMouseEnter={() => setActiveService(service)}
                    >
                      <h4 className="service-one_heading">
                        <Link to={service.link}>{service.title}</Link>
                      </h4>
                      <Link className="service-one_arrow" to={service.link}>
                        <i className="fa-classic fa-solid fa-arrow-right fa-fw"></i>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="service-one_image-column col-lg-5 col-md-12 col-sm-12">
              <div className="service-one_image-outer">
                <div className="service-one_images_outer">
                  {services.map((service, index) => (
                     <div
                        key={index}
                        className={`service-one_image ${activeService.title === service.title ? 'active' : ''}`}
                     >
                        <img src={service.image} alt={service.title} />
                     </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
