import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useGSAP = () => {
  useEffect(() => {
    // You can add any GSAP setup here that you want globally
  }, []);
};

export { useGSAP };
