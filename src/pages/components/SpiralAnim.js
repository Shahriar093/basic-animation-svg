"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const SpiralAnim = () => {
  const [down, setDown] = useState(null);
  const ref1 = useRef(null);
  const pathRef = useRef(null);
  const wrapperRef = useRef(null); // Added a reference for the wrapper
  const bx1 = useRef(null);
  const bx2 = useRef(null);

  useEffect(() => {
    const loadGsap = async () => {
      const ScrollTrigger = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const path = pathRef.current;

      // Get the total length of the path
      const pathLength = path.getTotalLength();

      // Set initial styles for the path
      gsap.set(path, {
        strokeDasharray: pathLength, // Set the dash pattern to the total length
        strokeDashoffset: pathLength, // Hide the entire path
      });

      // Create the animation
      gsap.to(path, {
        strokeDashoffset: 0, // Reveal the path
        scrollTrigger: {
          trigger: wrapperRef.current, // Use the wrapper div as the trigger
          start: "top 60%", // Animation starts when the top of the path touches the top of the viewport
          end: "bottom bottom", // Animation ends when the bottom of the trigger element reaches the bottom of the viewport
          scrub: true, // Smoothly animates with scrolling
          // pin: true, // Pins the wrapper div while the animation is happening
          // pinSpacing: false,
          // markers: true,
        },
        duration: 2, // Optional: Adds a time duration for the animation
        ease: "none", // Keeps the motion linear
      });

      gsap.from(bx1.current, {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          // markers: true,
          trigger: bx1.current,
          start: "top 30%",
          end: "bottom -30%",
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
          start: "top 30%",
          end: "bottom -30%",
          scrub: true,
        },
        ease: "back.out(1.2)",
      });

      gsap.to(wrapperRef.current, {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 60%", // Animation starts when the top of the path touches the top of the viewport
          end: "bottom bottom",
          scrub: true, // Smoothly scrubs the animation with scrolling
          onUpdate: (self) => {
            // When scroll reaches 50% progress, set the background to 'none'
            if (self.progress > 0.5) {
              gsap.set(wrapperRef.current, { backgroundImage: "none" });
            } else {
              // Restore the background image when scrolling back up
              gsap.set(wrapperRef.current, {
                backgroundImage: "url('/bgbg.png')",
              });
            }
          },
          duration: 2,
        },
      });
    };

    if (typeof window !== "undefined") {
      loadGsap();
    }

    // Event listener for scrolling direction
    const handleWheel = (event) => {
      setDown(event.deltaY > 0);
    };
    window.addEventListener("wheel", handleWheel);

    // Cleanup function
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="hidden md:block w-full h-screen  bg-cover bg-center text-black font-bold relative mx-auto mb-0"
    >
      <div className="top-0 right-16 h-full w-full absolute z-40">
        <svg
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1500 800"
        >
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
            d="M 100 100 
       v 250 
       q 0 100 100 100 
       h 1070
       q 100 0 100 100
       v 950"
            strokeWidth="65" // Updated to strokeWidth for JSX syntax
            fill="none"
          />
        </svg>
      </div>

      <div
        ref={bx1}
        className="rounded-lg absolute h-[30%] w-[50%] top-[18%] left-[22%] border-2 border-white shadow-lg z-20 text-4xl text-center"
      >
        סורידטה מחזקת את עמידותך הביטחונית על ידי גילוי איומים, מיפוי פוטנציאל
        הסיכון שלהם, והנחות הצעדים לתיקונם.
      </div>
      <div
        ref={bx2}
        className="rounded-lg absolute h-[30%] w-[50%]  bottom-[5%] left-[22%] border-2 border-white shadow-lg z-20 text-4xl text-center"
      >
        על ידי מניעת סיכונים להפוך לפרצות, אנחנו שומרים על יציבות ה-SaaS שלך ועל
        פעולה רציפה של העסק שלך.
      </div>
    </div>
  );
};

export default SpiralAnim;
