import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Buildwise Construction',
        link: '/buildwise',
        image: '/assets/subs/buildwise.png',
        subtitle: 'Subsidiaries',
        text: 'From real estate to road infrastructure, we deliver durable, timely, and cost-effective construction solutions tailored to your needs.'
    },
    {
        title: 'Puffin Agro-Allied',
        link: '/puffin-agro',
        image: '/assets/subs/agro.png',
        subtitle: 'Subsidiary',
        text: 'We are committed to ensuring food security through smart agriculture, modern technology, and quality farm inputs.'
    },
    {
        title: 'Puffin Energy',
        link: '/puffin-energy',
        image: '/assets/subs/ENERGY.png',
        subtitle: 'Subsidiary',
        text: 'We power homes and businesses with clean, affordable solar and hybrid energy solutions that are both sustainable and reliable.'
    },
    {
        title: 'Laser Shield',
        link: '/laser-shield',
        image: '/assets/subs/laser.png',
        subtitle: 'Subsidiary',
        text: 'We simplify international trade with end-to-end import/export services, including sourcing, logistics, and customs documentation.'
    },
    {
        title: 'Maz Logistics',
        link: '/maz-logistics',
        image: '/assets/subs/maz.png',
        subtitle: 'Subsidiary',
        text: 'With a strong transport network across Africa, we offer seamless movement of goods, storage facility, and delivery services.'
    },
    {
        title: 'Swingtide Consulting',
        link: '/swingtide',
        image: '/assets/subs/CONSULTING.png',
        subtitle: 'Subsidiary',
        text: 'We provide strategic guidance and expert advisory services to help businesses improve operations, grow, and succeed.'
    }
];

const ProjectCarousel = () => {
    const component = useRef(null);
    const items = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            items.current.forEach((item, i) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 140px",
                    endTrigger: component.current,
                    end: `bottom top+=${item.offsetHeight + (items.current.length * 0)}`,
                    pin: true,
                    pinSpacing: false,
                });
            });
        }, component);
        return () => ctx.revert();
    }, []);


    return (
        <section className="project-one" ref={component}>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="sec-title_title">Our Subsidiaries</div>
                    <h2 className="sec-title_heading">Puffin Group Subsidiaries <br /> </h2>
                </div>

                <div className="project-style-one-items">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-block_one ${index % 2 !== 0 ? 'style-two' : ''}`} ref={el => items.current[index] = el}>
                            <div className="project-block_one-inner">
                                <div className="project-block_one-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-block_one-overlay">
                                        <div className="project-block_one-overlay_inner" style={{ backgroundImage: 'url(/assets/images/background/project-1.png)' }}>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="project-block_one-title">{project.subtitle}</div>
                                            </div>
                                            <h3 className="project-block_one-heading"><Link to={project.link}>{project.title}</Link></h3>
                                            <div className="project-block_one-text">{project.text}</div>
                                            <Link to={project.link} className="project-block_one-arrow">
                                                <i className="fa-classic fa-solid fa-arrow-right fa-fw"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCarousel;
