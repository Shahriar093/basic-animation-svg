import React, { useState, useEffect, useRef } from "react";

const AverageRisksSection = () => {
  const data = [
    { value: 23, description: "שגיאות קריטיות בהגדרות" },
    {
      value: 1400,
      description: "קבצים רגישים ששותפו באמצעות קישורים אנונימיים",
    },
    { value: 47, description: "אפליקציות צד שלישי עם סיכון גבוה" },
  ];

  const [currentValues, setCurrentValues] = useState(data.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = data.map((item, index) => {
        return setInterval(() => {
          setCurrentValues((prev) => {
            const newValues = [...prev];
            if (newValues[index] < item.value) {
              newValues[index] += Math.ceil(item.value / 100); // Increment in steps
            } else {
              newValues[index] = item.value; // Ensure it stops at the target value
            }
            return newValues;
          });
        }, 10); // Speed of the count
      });

      return () => intervals.forEach((interval) => clearInterval(interval)); // Cleanup
    }
  }, [isVisible, data]);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16" dir="rtl">
      <div className="container mx-auto text-center w-8/12">
        <h2 className="text-2xl md:text-4xl text-gray-800">
          ממוצע הסיכונים לכל ארגון
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-right">
              <p className="text-6xl bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                {currentValues[index]}
              </p>
              <p className="text-gray-600 mt-4 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AverageRisksSection;
