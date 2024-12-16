"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HeaderSection = () => {
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const middleRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Move the clouds
    gsap.to(cloud1Ref.current, {
      x: "55%",
      scrollTrigger: {
        trigger: cloud1Ref.current,
        start: "top 30%",
        end: "+=100%",
        scrub: true,
      },
    });

    gsap.to(cloud2Ref.current, {
      x: "-55%",
      scrollTrigger: {
        trigger: cloud2Ref.current,
        start: "top 30%",
        end: "+=100%",
        scrub: true,
      },
    });

    // Animate the middle content
    gsap.to(middleRef.current, {
      y: -500,
      scrollTrigger: {
        trigger: middleRef.current,
        start: "top 30%",
        end: "+=100%",
        scrub: true,
      },
    });

    // Pin the header background
    gsap.to(wrapperRef.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 30%",
        end: "+=100%", // Extend pin duration
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <div ref={wrapperRef} className="flex flex-col w-full items-center gap-20 ">
      {/* Header Section */}
      <div className="w-full relative flex">
        <div
          ref={cloud1Ref}
          className="w-1/3 top-[17%] left-[10%] absolute z-[10] flex justify-start"
        >
          <Image src="/cloud1.png" width={300} height={200} alt="ענן 1" />
        </div>
        <div
          ref={cloud2Ref}
          className="w-1/3 top-[17%] right-[10%] absolute z-[10] flex justify-end"
        >
          <Image src="/cloud2.png" width={300} height={200} alt="ענן 2" />
        </div>
        <div
          ref={middleRef}
          id="header-background"
          className="text-center py-64 px-6 sm:px-10 md:px-20 lg:px-32 bg-cover bg-center w-full flex flex-col items-center mb-36"
        >
          <div className="md:w-5/12">
            <h1 className="text-3xl md:text-5xl text-gray-900">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                אומניטלקום
              </span>{" "}
              עיצוב התקשורת
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg">
              אבטחת השימוש באפליקציות תוכנה כשירות מפלטפורמה אחת, באופן
              פרואקטיבי.
            </p>
            <button className="mt-6 bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 text-white px-6 py-3 rounded-md shadow hover:opacity-90">
              גלה את הפלטפורמה
            </button>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <section
        id="trusted"
        className="bg-white py-5 border-2 items-center rounded-lg w-4/5"
      >
        <h2 className="text-center text-gray-600 text-sm uppercase tracking-wide">
          אמין על ידי
        </h2>
        <div className="flex justify-center mt-6">
          <Image
            id="trusted-brands-image"
            src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/home-hero-brands-1-c.png"
            alt="אמין על ידי מותגים"
            width={800}
            height={100}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default HeaderSection;
