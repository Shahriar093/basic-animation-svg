"use client";
import { useEffect, useRef } from "react";

export default function MovingBefore() {
  const boxRef1 = useRef(null); // First div (orange)
  const boxRef2 = useRef(null); // Second div (horizontal)

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef1.current,
          start: "top top",
          end: "200% top",
          scrub: true,
        },
      });

      // First div vertical growth (from the bottom)
      timeline.to(boxRef1.current, {
        height: "50vh", // Grow vertically downwards
        duration: 1,
      });

      // After vertical growth is complete, the second div starts horizontally
      timeline.to(
        boxRef2.current,
        {
          width: "50vw", // Grow horizontally from the bottom of the first div
          duration: 1,
          visibility: "visible",
          onStart: () => {
            // Position the second div at the bottom of the first div after vertical expansion
            gsap.set(boxRef2.current, {
              top: `calc(19% + ${boxRef1.current.offsetHeight}px)`, // Position it at the bottom of the first div
              left: `calc(50% - ${boxRef1.current.offsetWidth / 2}px)`, // Align horizontally with the first div's left
            });
          },
        }
        // Start horizontally expanding when the vertical expansion is near completion
      );
    };

    loadGsap();
  }, []);

  return (
    <div style={{ height: "200vh", backgroundColor: "#f5f5f5" }}>
      {/* First Orange Div */}
      <div
        ref={boxRef1}
        style={{
          position: "fixed",
          top: "20%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, 0)",
          width: "50px", // Initial width
          height: "50px", // Initial height
          backgroundColor: "orange",
        }}
      ></div>

      {/* Second Horizontal Div */}
      <div
        ref={boxRef2}
        style={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%,0)", // Center horizontally
          width: "0", // Start with 0 width
          height: "50px", // Same height as before
          backgroundColor: "orange", // Different color for the second div
          visibility: "hidden", // Initially hidden
          borderBottomLeftRadius: "60px",
        }}
      ></div>
    </div>
  );
}
