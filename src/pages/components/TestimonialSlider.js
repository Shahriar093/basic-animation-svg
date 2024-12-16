import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Easy and fast deployment. Seamless onboarding, intuitive, and easy to understand. The platform provides full visibility into the organization's SaaS Security Posture, with valuable insights and recommendations.",
    author: "Edward Cohen, Director, IT and Security, Lightforce Orthodontics",
  },
  {
    text: "The interface is clean and user-friendly, making complex processes simple. The customer support team is always available and responsive.",
    author: "Sarah Lee, CTO, Tech Innovators",
  },
  {
    text: "Great solution for managing our security needs. It saves time and improves efficiency across the board.",
    author: "John Doe, Security Analyst, SafeNet Corp",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 500);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 px-4">
      <div
        className={`text-center max-w-2xl transform transition-transform duration-500 ease-in-out ${
          isTransitioning ? "opacity-50 translate-x-2" : "opacity-100 translate-x-0"
        }`}
      >
        <div className="text-5xl text-red-500 mb-6">&ldquo;</div>
        <p className="text-xl text-gray-800">{testimonials[currentIndex].text}</p>
        <p className="mt-4 text-gray-600">{testimonials[currentIndex].author}</p>
      </div>

      <div className="flex items-center justify-center mt-8 space-x-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none"
        >
          &larr;
        </button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-500"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
