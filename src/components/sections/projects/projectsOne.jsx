import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import SectionTitle from "../../ui/sectionTitle";

const ProjectsOne = ({ data }) => {
  const setting = {
    spaceBetween: 30,
    speed: 500,
    loop: "true",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pegi-number",
      type: "fraction",
    },
    navigation: {
      nextEl: ".project-arry-next",
      prevEl: ".project-arry-prev",
    },
  };
  return (
    <section className="project section-padding">
      <div className="project-wrp">
        <div className="shape1 d-none d-md-block float-bob-y">
          <img src={"/images/shape/shape1.png"} alt="shape1" />
        </div>
        <Swiper
          {...setting}
          modules={[Pagination, Navigation, Autoplay]}
          className="have-bg d-none d-lg-block"
        >
          {data.map(({ id, src }) => {
            return (
              <SwiperSlide key={id}>
                <div
                  className="project-image bg-image"
                  style={{ backgroundImage: `url(${src})` }}
                ></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 bor-right py-lg-5">
              <SectionTitle>
                <SectionTitle.Name>CASE STUDY</SectionTitle.Name>
                <SectionTitle.Title>
                  Successfully completed projects for our clients
                </SectionTitle.Title>
                <SectionTitle.Description>
                  We have facility to produce advance work various industrial{" "}
                  <br /> applications based on specially developed technology.
                </SectionTitle.Description>
              </SectionTitle>

              <div className="arry-btn mb-4 d-block d-lg-none">
                <button className="arry-prev project-arry-prev">
                  <i>
                    <TfiAngleLeft />
                  </i>
                </button>
                <button className="ms-3 active arry-next project-arry-next">
                  <i>
                    <TfiAngleRight />
                  </i>
                </button>
              </div>
              <div className="row g-3">
                <div className="col-sm-4">
                  <div className="wrp">
                    <div className="pegi-number pt-4"></div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <Swiper
                    {...setting}
                    modules={[Pagination, Navigation, Autoplay]}
                  >
                    {data.map(({ id, project_description, project_name }) => {
                      return (
                        <SwiperSlide key={id}>
                          <div className="item">
                            <h3>{project_name}</h3>
                            <p>{project_description}</p>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className="arry-btn mt-65 d-none d-lg-block">
                <button className="arry-prev project-arry-prev">
                  <i>
                    <TfiAngleLeft />
                  </i>
                </button>
                <button className="ms-3 active arry-next project-arry-next">
                  <i>
                    <TfiAngleRight />
                  </i>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <Swiper
                {...setting}
                modules={[Pagination, Navigation, Autoplay]}
                className="mt-5 d-block d-lg-none"
              >
                {data.map(({ id, src }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="image">
                        <img src={src} alt="img" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsOne;
