import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex justify-center" dir="rtl">
      <footer className="w-4/5 bg-gray-50 p-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Information */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-gray-800">
              INFO@TOKOMNI.IO
            </h3>
            <address className="not-italic text-sm text-gray-600">
              רחוב מנחם בגין 7, פלסטין
              <br />
              244 שדרות 5, ניו יורק, ניו יורק 10001, ארה"ב
            </address>
          </div>

          {/* Platform Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              פלטפורמה
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>סקירה כללית</li>
              <li>אינטגרציות</li>
            </ul>
          </div>

          {/* Use Cases Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              מקרי שימוש
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>ניהול תצורת SaaS</li>
              <li>ניהול SaaS בצל</li>
              <li>אבטחת צד שלישי ו-SaaS ל-SaaS</li>
              <li>אבטחת אינטליגנציה גנרטיבית</li>
              <li>ניהול מצב זהות</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">משאבים</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>בלוג</li>
              <li>חומר פרסומי</li>
              <li>חדשות</li>
              <li>פודקאסטים</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">חברה</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>אודותינו</li>
              <li>הנהלה ודירקטוריון</li>
              <li>קריירה</li>
              <li>צור קשר</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex gap-4 mt-8">
          <Image
            src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/cert-1-hvr.png" // Replace with actual path
            alt="ISO Certification"
            width={60}
            height={60}
          />
          <Image
            src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/cert-2-hvr.png" // Replace with actual path
            alt="SOC 2 Certification"
            width={60}
            height={60}
          />
        </div>
      </footer>
    </div>
  );
}
