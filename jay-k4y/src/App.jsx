import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Hero from './components/Hero';
import Music from './components/Music';
import Merch from './components/Merch';
import IdentityCards from './components/IdentityCards';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <Hero />
      <Music />
      <IdentityCards />
      <Merch />
    </div>
  );
}

export default App;
