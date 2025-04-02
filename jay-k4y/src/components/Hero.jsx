import { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import crownImage from '../assets/crownofthorns-removebg-preview.png';
import '../styles/main.scss';
import gsap from 'gsap';

export default function Hero() {
  const crownRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      crownRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
    );
  }, []);

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="crown-wrapper">
        <img
          ref={crownRef}
          src={crownImage}
          alt="Crown of Thorns"
          className="crown-image"
        />
      </div>
      <h1 className="hero-title">JAY-K4Y</h1>
      <p className="hero-subtext">Crowned in distortion. Born from sound.</p>
    </motion.section>
  );
}
