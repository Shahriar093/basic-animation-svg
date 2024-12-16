"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Demo = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const bx1 = useRef(null);
  const bx2 = useRef(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;

    // Calculate the total path length
    const pathLength = path.getTotalLength();

    // Create a GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%", // Start animation when the section enters the center of the viewport
        end: "bottom bottom 30%", // End animation when the section leaves the viewport
        scrub: true, // Smooth scroll animation
        // pin: true, // Pin the section during the animation
        pinSpacing: false, // Ensure layout doesn't break
        markers: true, // Debug markers to visualize start and end
      },
    });

    // Add animations to the timeline
    tl.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    }).to(path, {
      strokeDashoffset: 0,
      duration: 1, // Relative duration for smoothness
      ease: "none", // Linear animation
    });
    tl.from("#img", {
      opacity: 0,
      scale: 0,
    });
    gsap.from(bx1.current, {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        // markers: true,
        trigger: bx1.current,
        start: "top+=50 top", // Start animation when the section enters the center of the viewport
        end: "bottom center",
        scrub: true,
      },
      ease: "back.out(1.2)",
    });
    gsap.from(bx2.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        // markers: true,
        trigger: bx1.current,
        start: "top+=50 top", // Start animation when the section enters the center of the viewport
        end: "bottom center",
        scrub: true,
      },
      ease: "back.out(1.2)",
    });
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full  -mt-24">
      <div className="top-0 left-0 h-full w-full absolute">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="gradientStroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" style={{ stopColor: "teal", stopOpacity: 1 }} />
              <stop
                offset="50%"
                style={{ stopColor: "indigo", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "blue", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            stroke="url(#gradientStroke)"
            id="lineAB"
            d="M 1236 0
              v 200
              q 0 100 -100 100 
              h -930"
            strokeWidth="63"
            fill="none"
          />
        </svg>
      </div>
      <div id="img" className="absolute left-0 top-[20%]">
        <Image
          src="/blueThemed.png"
          width={300}
          height={400}
          className="rounded-full opacity-1 scale-1"
        />
      </div>
      <div
        ref={bx1}
        className="rounded-lg absolute h-[20%] w-[50%]  top-[12rem] left-[22%]  z-20 text-4xl text-center text-black font-bold "
      >
        All cybersecurity companies handle risks.
      </div>
      <div
        ref={bx2}
        className="rounded-lg absolute h-[20%] w-[50%]  top-[25rem] left-[22%]  z-20 text-4xl text-center text-black font-bold"
      >
        We make sure to consider the business impact as well.
      </div>
    </div>
  );
};

export default Demo;
