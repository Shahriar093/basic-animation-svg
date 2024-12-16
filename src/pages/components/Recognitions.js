import Image from "next/image";

export default function Recognitions() {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-50 border-2">
        {/* Recognitions Section */}
        <div className="flex flex-col items-center border-2 rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Recognitions</h2>
          <div className="grid grid-cols-3 gap-4 p-5">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/CSA-Startup-Membership-badge.png" // Replace with your image paths
              alt="Recognition 1"
              width={80}
              height={80}
              className="opacity-50"
            />
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/Big-INNOVATION-2024-01.png"
              alt="Recognition 2"
              width={80}
              height={80}
              className="opacity-50"
            />
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/Global-InfoSec-Awards-Winner-for-2024.png"
              alt="Recognition 3"
              width={80}
              height={80}
              className="opacity-50"
            />
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/Globee Awards Gold Winner for Cybersecurity.png"
              alt="Recognition 4"
              width={80}
              height={80}
              className="opacity-50"
            />
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/award-logo-1-hvr.png"
              alt="Recognition 5"
              width={80}
              height={80}
              className="opacity-50"
            />
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/awards/award-logo-2-hvr.png"
              alt="Recognition 6"
              width={80}
              height={80}
              className="opacity-50"
            />
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="flex flex-col gap-6">
          {[
            {
              title:
                "What is the Microsoft Teams Vulnerability and 6 Precautions You Need to Take",
              date: "November 21, 2024",
              image:
                "https://www.suridata.ai/wp-content/uploads/2024/11/Icon-What-is-the-Microsoft-Teams-Vulnerability-and-6-Precautions-You-Need-to-Take-01.png",
            },
            {
              title: "How to Perform a Security Controls Assessment (SCA)",
              date: "November 18, 2024",
              image:
                "https://www.suridata.ai/wp-content/uploads/2024/11/Icon-How-to-Perform-a-Security-Controls-Assessment.png",
            },
            {
              title:
                "The InfoSec Guide to ITDR (Identity Threat Detection and Response)",
              date: "November 11, 2024",
              image:
                "https://www.suridata.ai/wp-content/uploads/2024/11/Icon-The-InfoSec-Guide-to-ITDR.png",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow-sm rounded-lg p-4"
            >
              <div className="flex flex-col p-4">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-red-500">{post.date}</p>
              </div>
              <Image
                src={post.image}
                alt={post.title}
                width={60}
                height={60}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
