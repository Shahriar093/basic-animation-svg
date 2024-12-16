import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function PreventRisk() {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline for both elements
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#prevent-background",
          start: "top 80%", // Adjusted to start later
          end: "bottom top", // Adjusted to trigger at the bottom
          scrub: true, // Smooth scrolling animation
        },
      })
      .to("#rain-background", {
        y: 100, // Move down
        scale: 0.8, // Reduce width and height proportionally
        ease: "none",
      })
      .to(
        "#prevent-background",
        {
          y: -50, // Move the parent container back (up)
          ease: "none",
        },
        0
      ); // Start this animation at the same time as the background
  }, []);

  return (
    <section
      dir="rtl"
      id="Prevent-background"
      className="relative flex flex-col items-center justify-center bg-gray-50 md:h-screen overflow-hidden -mt-34"
    >
      {/* Rain GIF Background */}
      <div className="absolute inset-0 flex justify-center">
        <div id="rain-background" className="relative w-1/2 h-full">
          <Image
            src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/rain3.gif"
            alt="Rain background"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="z-10 text-center p-8">
        <h1 className="text-3xl md:text-5xl text-gray-800">
          למנוע סיכונים מלהפוך לאיומים
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          הטבע של אפליקציות SaaS יוצר סיכונים נסתרים רבים שמאפשרים להאקרים לחדור
          אליהם. בעוד שכל ספק SaaS נושא באחריות לאבטחת התשתית שלו, האחריות שלך
          היא ליישם את בקרות האבטחה בכלהמערכת האקולוגית שלך.
        </p>
      </div>

      {/* Bottom Cactus Image */}
      <div className="absolute bottom-0 w-4/6">
        <Image
          src="/cactus.png"
          alt="Cactuses"
          layout="responsive"
          width={1000}
          height={300}
        />
      </div>
    </section>
  );
}
