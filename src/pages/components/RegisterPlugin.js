import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Business() {
  useEffect(() => {
    const textSpans = document.querySelectorAll(".business h1 span");
    const graphImage = document.querySelector(".business .graph-img");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".business .text-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false, // Enable markers for debugging
      },
    });

    // Timeline animations (updated for two SVGs)
    tl.to(textSpans[0], { color: "#4a5568" }, 0.5)
      .to(
        graphImage,
        {
          attr: { src: "./graph-4.svg" },
        },
        0.5
      )
      .to(textSpans[0], { color: "#a0aec0" }, 0.5)
      .to(textSpans[1], { color: "#4a5568" }, 0.5)
      .to(
        graphImage,
        {
          attr: { src: "./graph-5.svg" },
        },
        0.5
      );

    return () => {
      tl.kill(); // Cleanup the timeline
      ScrollTrigger.kill(); // Cleanup ScrollTrigger
    };
  }, []);

  return (
    <div className="business w-full flex justify-center h-screen">
      <div className="w-4/5 flex flex-col lg:flex-row items-center justify-between bg-gray-50 p-8 lg:px-16 lg:py-20 space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 flex justify-center relative text-section">
          <div className="relative w-64 h-64 lg:w-full lg:h-full">
            <Image
              src="./graph-4.svg"
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
              Suridata פועלת בערנות לאיתור וזיהוי איומי אבטחה ומחסלת אותם, תוך
              שמירה על היכולת שלך להמשיך לנהל את העסק כרגיל.
            </span>
            <span className="text-gray-400">
              על ידי לימוד מעמיק של טבע העסק שלך, אנחנו נשארים רגישים למה שחשוב
              ביותר לך וללקוחותיך.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
