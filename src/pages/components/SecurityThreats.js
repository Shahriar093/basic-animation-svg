import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SecurityThreats() {
  useEffect(() => {
    const textSpans = document.querySelectorAll(".security-threats h1 span");
    const graphImage = document.querySelector(".security-threats .graph-img");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".security-threats .text-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false, // Enable markers for debugging
      },
    });

    // Timeline animations (three SVG transitions)
    tl.to(textSpans[0], { color: "#4a5568" }, 0.1)
      .to(
        graphImage,
        {
          attr: { src: "./graph-1.svg" },
        },
        0.1
      )
      .to(textSpans[0], { color: "#a0aec0" }, 0.3)
      .to(textSpans[1], { color: "#4a5568" }, 0.3)
      .to(
        graphImage,
        {
          attr: { src: "./graph-2.svg" },
        },
        0.3
      )
      .to(textSpans[1], { color: "#a0aec0" }, 0.6)
      .to(textSpans[2], { color: "#4a5568" }, 0.6)
      .to(
        graphImage,
        {
          attr: { src: "./graph-3.svg" },
        },
        0.6
      );

    return () => {
      tl.kill(); // Cleanup the timeline
      ScrollTrigger.kill(); // Cleanup ScrollTrigger
    };
  }, []);

  return (
    <div className="security-threats w-full flex justify-center h-screen">
      <div className="w-4/5 flex flex-col lg:flex-row items-center justify-between bg-gray-50 p-8 lg:px-16 lg:py-20 space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 flex justify-center relative text-section">
          <div className="relative w-64 h-64 lg:w-full lg:h-full">
            <Image
              src="./graph-1.svg"
              alt="Risk Level Graph"
              className="w-full h-full object-contain graph-img"
              height={100}
              width={100}
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl text-end lg:text-3xl leading-snug mb-4">
            <span className="text-gray-900">
              להתמודד עם איומי אבטחה הוא אתגר שכל עסק מתמודד איתו.
            </span>
            <span className="text-gray-400">
              אי אפשר להתמודד עם כולם, ואין צורך בכך, כי לא לכולם יש את אותה
              השפעה.
            </span>
            <span className="text-gray-400">
              בעוד שהתקפות יכולות להוות סכנה אמיתית לעסק שלך, לפעמים גם אמצעי
              הנגד עלולים להיות מסוכנים.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
