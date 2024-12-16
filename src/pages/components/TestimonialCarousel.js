import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "BerryMuffin150",
      review:
        "אני מאוד מרוצה מהתבנית, במיוחד מהיכולת להתאים אותה אישית, כי יש לה המון אפשרויות והיא נראית נהדר. ניתן גם ליצור עיצובים חדשים.",
      attribute: "התאמה אישית",
      img: "/img/envato.png",
    },
    {
      name: "korin_fr",
      review:
        "תבנית מדהימה! אחת הטובות שעבדתי איתן... יפה וקלה להתאמה אישית. Elementor הוא חובה. עבודה מעולה!",
      attribute: "איכות העיצוב",
      img: "/img/envato.png",
    },
    {
      name: "NellLC29",
      review:
        "שירות הלקוחות מושלם, כמו גם התבנית. לא תתאכזבו! Le service client est parfait, le thème aussi. Vous pouvez l'acheter les yeux fermés !",
      attribute: "שירות לקוחות",
      img: "/img/envato.png",
    },
    {
      name: "mpgmateus",
      review:
        "התבנית נהדרת! אני מאוהב בה!!! התמיכה היא לא מהעולם הזה! אתם מדהימים! תודה רבה על תמיכה כזו! :))",
      attribute: "שירות לקוחות",
      img: "/img/envato.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800">
            אנשים אמיתיים, סיפורים אמיתיים. <br />
            תשמעו מהקהילה שלנו.
          </h2>
        </div>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={Math.floor(testimonials.length / 2)}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="/img/quotes.png"
                  alt="ציטוט"
                  className="w-10 h-10 mb-4"
                />
                <div className="mb-4">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="fas fa-star text-yellow-400 text-xs"
                      ></i>
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.review}</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="mr-4 text-right">
                    <h6 className="text-lg font-medium text-gray-700">
                      {testimonial.name}
                    </h6>
                    <span className="text-sm text-gray-500">
                      על{" "}
                      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        {testimonial.attribute}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
