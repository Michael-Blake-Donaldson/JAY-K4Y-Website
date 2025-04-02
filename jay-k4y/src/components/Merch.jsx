import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/main.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Merch() {
  const merchRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      merchRef.current.querySelectorAll('.merch-card'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: merchRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  // Replace these URLs with your real merch/product links/images
  const merchItems = [
    {
      name: 'Crown of Thorns Hoodie',
      img: 'https://via.placeholder.com/300x300?text=Hoodie',
      link: '#',
    },
    {
      name: 'JAY-K4Y Beanie',
      img: 'https://via.placeholder.com/300x300?text=Beanie',
      link: '#',
    },
    {
      name: 'Glitch Logo Tee',
      img: 'https://via.placeholder.com/300x300?text=Tee',
      link: '#',
    },
  ];

  return (
    <section className="merch-section" ref={merchRef} data-scroll-section>
      <h2 className="section-title">MERCH</h2>
      <div className="merch-grid">
        {merchItems.map((item, index) => (
          <div className="merch-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="buy-button">
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
