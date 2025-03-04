import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const PartnerOne = () => {
    return (
        <section className="trust bg-image section-padding">
            <div className="shape1 d-none d-md-block float-bob-y">
                <img src={'/images/shape/shape1.png'} alt="shape" />
            </div>
            <div className="container">
                <h4 className="mb-65 text-center">Trusted by industry-leading organizations including</h4>
                <div className="item">
                    <Swiper
                        loop={true}
                        spaceBetween={20}
                        speed={300}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            992: {
                                slidesPerView: 5,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            320: {
                                slidesPerView: 2,
                            },
                        }}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide><img src={'/images/trust/01.png'} alt="image" /> </SwiperSlide>
                        <SwiperSlide><img src={'/images/trust/02.png'} alt="image" /> </SwiperSlide>
                        <SwiperSlide><img src={'/images/trust/03.png'} alt="image" /> </SwiperSlide>
                        <SwiperSlide><img src={'/images/trust/04.png'} alt="image" /> </SwiperSlide>
                        <SwiperSlide><img src={'/images/trust/05.png'} alt="image" /> </SwiperSlide>
                        <SwiperSlide><img src={'/images/trust/01.png'} alt="image" /> </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default PartnerOne