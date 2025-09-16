import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TitleAnim = ({ children }) => {
  const el = useRef(null);

  useEffect(() => {
    const words = el.current.innerText.split(' ');
    el.current.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

    const spans = el.current.querySelectorAll('span');

    gsap.set(spans, { opacity: 0, y: 20, rotationX: -90 });

    ScrollTrigger.batch(spans, {
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out'
        });
      },
      once: true
    });
  }, []);

  return <div ref={el}>{children}</div>;
};

export default TitleAnim;
