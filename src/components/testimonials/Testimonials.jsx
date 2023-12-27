import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/hicleanlogo.jpg";
import AVTR2 from "../../assets/colobylogo.png";
import AVTR3 from "../../assets/frmclogo.png";
import AVTR4 from "../../assets/kpslogo.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: AVTR1,
    name: "Hi-Clean Cleaning Services",
    review:
      "Adeyemo Ademola transformed our vision into reality! His skills as a Full Stack Web Developer were evident in the beautifully designed and highly functional website for Hi-Clean Cleaning Services. With a keen eye for detail and a collaborative approach, Adeyemo ensured a smooth and enjoyable process. Our online presence has soared, thanks to his dedication and talent. Highly recommended for anyone seeking a skilled Full Stack Web Developer",
  },
  {
    avatar: AVTR2,
    name: "Coloby",
    review:
      "Adeyemo Ademola has been instrumental at Coloby, bringing innovative solutions and technical prowess to our startup. His collaborative spirit and commitment to excellence have made a significant impact on our projects. Looking forward to continued success together!",
  },
  {
    avatar: AVTR3,
    name: "Fortune Royal Multiconcepts",
    review:
      "Adeyemo Ademola transformed our online presence! His web development expertise elevated our site for Fortune Royal Multiconcepts, creating a seamless and engaging user experience. A standout professional in the field!",
  },
  {
    avatar: AVTR4,
    name: "Kasmoz Private School",
    review:
      "Adeyemo Ademola has played a pivotal role in transforming Kasmoz Private School's online presence. His expertise and creative flair have given life to our website, effectively capturing the essence of our institution. The website design reflects the academic excellence and vibrant atmosphere of KPS. We appreciate Adeyemo's commitment to delivering a website that aligns seamlessly with our educational values. It has been a pleasure collaborating on this project, and we look forward to continued partnership.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
