"useClient";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "../../lib/customHooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function () {
  const ContentRef = useRef(null);
  const [activeIconIndex, setActiveIconIndex] = useState(0);

  // SVG icons configuration
  const icons = [
    {
      svg: (
        <svg
          className="h-6 w-6 text-gray-500"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 28 30"
          style={{ enableBackground: "new 0 0 28 30" }}
          xmlSpace="preserve"
        >
          <path
            d="M26.6,13.9c-0.6-0.8-1.4-1.3-2.2-1.6c-0.1-0.9-0.5-1.7-0.8-2.3c-0.2-0.4-0.4-0.7-0.6-0.9C22.9,9,22.9,9,22.8,8.9
            c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-2-2-4.6-1.9-6.2-1.5
            C14.2,3.5,10.6,3,9,3C5.4,3,2.9,4.9,1.7,7.3c-1.1,2.2-1.2,4.9-0.3,7.1c-0.5,0.9-0.8,1.8-0.9,2.7c-0.2,1-0.1,2,0.1,2.7
            c0.2,0.5,0.7,0.8,1.3,0.6c0.5-0.2,0.8-0.7,0.6-1.3c-0.1-0.3-0.2-1,0-1.8c0.1-0.8,0.4-1.6,0.9-2.3l0.4-0.5l-0.3-0.6
            c-0.9-1.7-0.8-4,0.1-5.9C4.4,6.4,6.2,5,9,5c1.3,0,4.3,0.4,6.1,3.9l0.4,0.8l0.8-0.3l0,0c1.2-0.5,3.4-0.8,4.9,0.8c0,0,0,0,0,0
            c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.2c0.1,0.1,0.3,0.4,0.4,0.6c0.3,0.5,0.6,1.2,0.6,2v0.8l0.8,0.2l0,0c0.5,0.1,1.2,0.5,1.8,1.2
            c0.5,0.6,0.9,1.6,0.5,3.1c-0.3,1.4-1.2,2.2-2.3,2.7c-0.4,0.2-0.8,0.3-1.2,0.4c-0.1-3-2.7-5.4-6-5.4H9c-0.5,0-1,0.5-1,1v1H6
            c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h2v1c0,0.5,0.5,1,1,1h7c2.5,0,4.7-1.5,5.6-3.5c0.8-0.1,1.6-0.3,2.4-0.6c1.5-0.7,3-1.9,3.4-4.1
            C27.9,16.6,27.5,15,26.6,13.9z"
          />
        </svg>
      ),
      triggerSelector: "#section1",
    },
    {
      svg: (
        <svg
          className={`home__screenshots-line-ico no-active h-6 w-6`}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 30 30"
          style={{ enableBackground: "new 0 0 30 30" }}
          xmlSpace="preserve"
        >
          <g>
            <path d="M5,10c0.6,0,1-0.4,1-1V6h3c0.6,0,1-0.4,1-1S9.6,4,9,4H5C4.4,4,4,4.4,4,5v4C4,9.6,4.4,10,5,10z"></path>
            <path d="M25,20c-0.6,0-1,0.4-1,1v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4C26,20.4,25.6,20,25,20z"></path>
            <path d="M9,24H6v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S9.6,24,9,24z"></path>
            <path d="M25,4h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1V5C26,4.4,25.6,4,25,4z"></path>
            <path d="M25,14h-9V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h9v9c0,0.6,0.4,1,1,1s1-0.4,1-1v-9h9 c0.6,0,1-0.4,1-1S25.6,14,25,14z"></path>
          </g>
        </svg>
      ),
      triggerSelector: "#section2",
    },
    {
      svg: (
        <svg
          className={`home__screenshots-line-ico no-active h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          fill="currentColor"
        >
          <g>
            <path d="M14,14H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S14.6,14,14,14z"></path>
            <path d="M5,11h6c0.6,0,1-0.4,1-1V4c0-0.6-0.4-1-1-1H5C4.4,3,4,3.4,4,4v6C4,10.6,4.4,11,5,11z M6,5h4v4H6V5z"></path>
            <path d="M11,19H5c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1v-6C12,19.4,11.6,19,11,19z M10,25H6v-4h4V25z"></path>
            <path
              d="M29,10.9c0-1.4-0.7-2.5-1.5-3.1C26.6,7.2,25.7,7,25,7h-5V4l-5,4l5,4V9h5c0.3,0,0.9,0.1,1.3,0.4c0.3,0.2,0.7,0.7,0.7,1.4
    c0,0,0,0.1,0,0.1v8.1c0,0,0,0.1,0,0.1c0,0.3-0.1,0.8-0.4,1.2C26.3,20.7,25.9,21,25,21c0,0,0,0-0.1,0h-7.4c-0.5,0-1,0.5-1,1
    s0.5,1,1,1h7.4c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c1.5,0,2.6-0.7,3.2-1.5c0.6-0.8,0.8-1.7,0.8-2.4
    c0,0,0,0,0-0.1L29,10.9C29,10.9,29,10.9,29,10.9z"
            ></path>
          </g>
        </svg>
      ),
      triggerSelector: "#section3",
    },
    {
      svg: (
        <svg
          className={`home__screenshots-line-ico no-active h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          fill="currentColor"
        >
          <g>
            <path
              d="M25.3,3.9L15.3,2c-0.2,0-0.5,0-0.7,0l-10,1.8C3.7,4,3,4.9,3,5.8v11.1c-0.2,1.8,0.7,5.9,5.4,8.9l5.4,3.6
    c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0,0.8-0.1,1.1-0.3l5.4-3.6c1.9-1.1,5.5-4.5,5.5-8.9V5.8C27,4.9,26.3,4,25.3,3.9z M25,17
    c0,3.5-3,6.2-4.5,7.2L15,27.8l-5.5-3.6c-4.1-2.6-4.7-6-4.5-7L5,5.8c0,0,0,0,0,0l0,0v0L15,4l10,1.8V17z"
            ></path>
            <path
              d="M10.7,14.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7l7.7-7.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L14,17.6
    L10.7,14.3z"
            ></path>
          </g>
        </svg>
      ),
      triggerSelector: "#section4",
    },
    {
      svg: (
        <svg
          className={`home__screenshots-line-ico no-active h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          fill="currentColor"
        >
          <path
            d="M24,3H6C4.3,3,3,4.3,3,6v18c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3V6C27,4.3,25.7,3,24,3z M25,24c0,0.6-0.4,1-1,1H6
  c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1V24z"
          ></path>
          <g>
            <path d="M10,16L10,16c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-3C9,16.4,9.4,16,10,16z"></path>
          </g>
          <g>
            <path d="M15,13L15,13c0.6,0,1,0.4,1,1v6c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1v-6C14,13.4,14.4,13,15,13z"></path>
          </g>
          <g>
            <path d="M20,9L20,9c0.6,0,1,0.4,1,1v10c0,0.6-0.4,1-1,1l0,0c-0.6,0-1-0.4-1-1V10C19,9.4,19.4,9,20,9z"></path>
          </g>
        </svg>
      ),
      triggerSelector: "#section5",
    },
  ];

  const gsapEffects = useGSAP();

  useEffect(() => {
    if (ContentRef.current) {
      // Pin the sidebar until the fifth section finishes
      // gsap.to(barContentRef.current, {
      //   scrollTrigger: {
      //     trigger: barContentRef.current,
      //     start: "top top", // Adjust this based on your layout
      //     endTrigger: "#section5", // The fifth section is the last trigger
      //     // end: "bottom bottom", // Sidebar unpins when #section5 scrolls out
      //     pin: true,
      //     pinSpacing: false,
      //     markers: true,
      //   },
      // });

      // Create ScrollTriggers for each section
      icons.forEach((icon, index) => {
        ScrollTrigger.create({
          trigger: icon.triggerSelector,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIconIndex(index),
          onEnterBack: () => setActiveIconIndex(index),
          pinSpacing: false,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [gsapEffects]);

  return (
    <div
      ref={ContentRef}
      className="bar-content min-h-screen overflow-hidden hidden sm:flex flex-col items-center py-4  w-16"
    >
      <div className="mt-8 space-y-6 text-gray-400 bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 rounded-md">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`w-16 h-12 flex items-center justify-center  ${
              index === activeIconIndex
                ? "bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 rounded-t-lg"
                : ""
            }`}
          >
            <div
              className={`w-12 h-12 ${
                index === activeIconIndex
                  ? "bg-white rounded-full shadow-lg flex items-center justify-center -mb-6"
                  : "flex items-center justify-center"
              }`}
            >
              {icon.svg}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
