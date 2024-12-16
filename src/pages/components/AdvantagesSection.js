import React from "react";

const AdvantagesSection = () => {
  return (
    <>
      {/* First Advantages Section */}
      <section className="relative h-[1500px]">
        <div
          className="hidden md:block absolute inset-0 z-[-1]"
          id="lottie-home-mob-third"
        ></div>
        <div className="container mx-auto">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-center max-w-[720px] mx-auto mb-[215px]">
              <p
                className="m-0 leading-[1.3] text-base md:text-lg"
                data-anim-advantages="top"
              >
                Suridata fortifies your {" "}
                <a
                  className="inline-block px-[22px] py-[5px] bg-[#ebecee] rounded-full text-black transition-all duration-300 ease-out"
                  href="#"
                >
                  security posture
                  <span
                    className="tooltip-txt absolute bg-white p-2 rounded shadow-lg mt-2"
                    data-tooltip-txt="posture"
                  >
                    The ability of an enterprise to secure its networks, systems, and data, and react to any threats or attacks on them.
                  </span>
                </a>
                {" "}by sniffing out those threats, mapping their risk potential, and laying out the steps to fix them.
              </p>
            </div>
            <div className="text-center max-w-[720px] mx-auto">
              <p
                className="m-0 leading-[1.3] text-base md:text-lg"
                data-anim-advantages="bottom"
              >
                By preventing risks from turning into breaches, we keep your SaaS foundations solid and your {" "}
                <a
                  className="inline-block px-[22px] py-[5px] bg-[#ebecee] rounded-full text-black transition-all duration-300 ease-out"
                  href="#"
                >
                  business operation
                  <span className="tooltip-txt absolute bg-white p-2 rounded shadow-lg mt-2">
                    Business operations refer to the activities and tasks that organizations use to produce goods and services.
                  </span>
                </a>
                {" "}uninterrupted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Advantages Section */}
      <section className="relative h-[1206px] p-0">
        <div
          className="hidden md:block absolute inset-0 z-[-1]"
          id="lottie-home-mob-fourth"
        ></div>
        <div className="container mx-auto">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-center max-w-[720px] mx-auto mb-[215px]">
              <p
                className="m-0 leading-[1.3] text-base md:text-lg"
                data-anim-advantages="top"
              >
                All cybersecurity
                <br /> companies handle risks
              </p>
            </div>
            <div className="text-center max-w-[720px] mx-auto">
              <p
                className="m-0 leading-[1.3] text-base md:text-lg"
                data-anim-advantages="bottom"
              >
                We make sure to consider
                <br /> the {" "}
                <a
                  className="inline-block px-[22px] py-[5px] bg-[#ebecee] rounded-full text-black transition-all duration-300 ease-out"
                  href="#"
                >
                  business impact
                  <span className="tooltip-txt absolute bg-white p-2 rounded shadow-lg mt-2">
                    A business impact analysis (BIA) determines the criticality of business activities and associated resource requirements to ensure operational resilience and continuity during and after a disruption.
                  </span>
                </a>
                {" "}as well.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvantagesSection;
