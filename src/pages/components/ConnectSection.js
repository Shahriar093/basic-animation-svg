import Image from "next/image";
import SideBar from "./SideBar";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ConnectSection = () => {
  const barContentRef = useRef(null);
  useEffect(() => {
    if (barContentRef.current) {
      // Pin the sidebar until the fifth section finishes
      gsap.to("#mother", {
        scrollTrigger: {
          trigger: barContentRef.current,
          start: "top top", // Adjust this based on your layout
          // endTrigger: "bottom center", // The fifth section is the last trigger
          end: "bottom center", // Sidebar unpins when #section5 scrolls out
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
      });
    }
  }, []);

  return (
    <div
      id="mother"
      className="flex justify-between w-10/12 gap-20 relative pl-10 -mt-12 ml-2 "
    >
      {/* Sidebar content */}

      <section className="bg-gray-50 py-16 w-4/5">
        {/* First Section */}
        <div
          id="section1"
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8"
        >
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col items-end gap-4">
              <div className="flex flex-col space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 text-right">
                  חיבור
                </h2>
                <p className="text-gray-600 text-right">
                  ברגע שאתה מתחבר, המשימה הראשונה של סורידאטה היא גילוי; זיהוי
                  אוטומטי של פלטפורמות ה-SaaS החלקות במערכת האקולוגית שלך
                  שעשויות להשפיע על עמידותך בפני איומים. תוך דקות, סורידאטה
                  מתחבר לאפליקציות ה-SaaS שלך ומתחיל לפעול, תוך שימוש במדיניות
                  מוכנה מראש כדי לאתר את החולשות המוסתרות בתוך פעולויות ה-SaaS
                  שלך. תהליך ההתקנה החלק הזה עוזר לך למפות את סטאק ה-SaaS שלך
                  ואת עמידותך בפני איומים בקלות.
                </p>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="/pc.png"
              alt="Laptop Connect"
              width={550}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Section */}
        <div
          id="section2"
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mt-16"
        >
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 text-right">
                זיהוי סיכוני אבטחה
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
                סיכוני אבטחה ואיומים יכולים להיות חבויים עמוק בתוך המערכת,
                מוסתרים על ידי קונפיגורציות שגויות, כללי ניהול גישה, שינויים
                בגרסאות ואפילו זכויות גישה ישנות. סורידאטה חורגת מעבר לשכבות אלו
                כדי למפות את הקשרים, התלויות ההדדיות, החפיפות וההזנחות, על מנת
                לזהות היכן האיומים עשויים להסתתר ולהמתין.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="/pc.png"
              alt="Laptop Connect"
              width={550}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* Third Section */}
        <div
          id="section3"
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mt-16"
        >
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 text-right">
                העדפת סיכוניםs
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
                ברגע שכל סיכוני האבטחה ב-SaaS זוהו, האתגר הבא הוא להחליט היכן יש
                להתרכז. עליך להעריך אילו סיכונים משפיעים יותר על המשכיות העסק
                לעומת אלו שקל יותר לנצל. סורידאטה לומדת את סביבת ה-SaaS שלך
                והופכת למומחה שלך בתחום, תוך חיסכון בזמן ובמאמצים יקרי ערך.
                התוצאה היא רשימה מקיפה ומדורגת של פעולות, שמנחה אותך להתמקד
                בנושאים הקריטיים ביותר המאיימים על יסודות סביבת ה-SaaS שלך.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-3.png"
              alt="Laptop Risks"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Fourth Section */}
        <div
          id="section4"
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mt-16"
        >
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 text-right">
                הערכת השפעת התיקון
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
                טיפול בסיכוני אבטחה יכול לסכן את פעולתה של העסק על ידי יצירת
                שגיאות, כשלונות או בעיות בחווית המשתמש. סורידאטה יכולה לראות דרך
                החושך שמתחת לאפליקציית SaaS מורכבת ולספק ניתוח לגבי ההשפעה
                הפוטנציאלית של כל מאמץ תיקון. זה מאפשר לך לפתור את הסיכונים מבלי
                להפריע לשגרת העבודה היומיומית של העובדים שלך.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-4.png"
              alt="Remediate Threats"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Fifth Section */}
        <div
          id="section5"
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mt-16"
        >
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 text-right">
                הכוונה ותיקון
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
                תהליך הפחתת סיכוני אבטחה כולל מאמצים רבים ומקבילים ממחלקות
                וגורמים שונים כדי לחזק את סביבת ה-SaaS שלך. תהליך זה דורש תיאום
                ומעקב מתמשך. סורידאטה מספקת הכוונה כיצד לתקן את הסיכונים,
                ומאפשרת לך ליצור ולהפעיל זרימות עבודה שמסייעות לצוות שלך.
                הסיכונים מסודרים לקבוצות, כך שניתן לנהל התראות ולוודא שרק
                הפריטים הקריטיים ביותר מועברים במסגרת החבילה כדי לייצר תגובה
                מיידית.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-5.png"
              alt="Monitor Continuously"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <div ref={barContentRef}>
        <SideBar />
      </div>
    </div>
  );
};

export default ConnectSection;
