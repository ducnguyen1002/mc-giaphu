'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const feedbackImages = [
    'feedback-1.jpg',
    'feedback-2.jpg',
    'feedback-3.jpg',
    'feedback-4.jpg',
    'feedback-5.jpg',
]

const Feedbacks = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <section
            id="feedbacks"
            className="container bg-lightBlue py-10 text-navy md:py-20"
        >
            <h2 className="mb-4 text-center uppercase tracking-wide">
                Đánh giá
            </h2>
            <p className="mb-12 text-center text-xl font-light text-gray-700">
                trực tiếp từ khách hàng của MC Gia Phú
            </p>

            {/* Swiper */}
            <div data-aos="fade-up" className="container relative">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current
                        swiper.params.navigation.nextEl = nextRef.current
                        swiper.navigation.init()
                        swiper.navigation.update()
                    }}
                    loop={true}
                    modules={[Navigation]}
                    className="px-6"
                >
                    {feedbackImages.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex justify-center p-2 md:p-6"
                        >
                            <div className="relative h-[600px] w-full shadow-2xl shadow-warmBlue">
                                <Image
                                    src={`/assets/images/${img}`}
                                    alt={`Feedback ${index + 1}`}
                                    fill
                                    className="rounded-xl object-cover object-top"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-navy bg-lightBlue p-3 text-navy shadow-md transition hover:scale-110"
                >
                    <ChevronLeft size={20} />
                </button>

                <button
                    ref={nextRef}
                    className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-navy bg-lightBlue p-3 text-navy shadow-md transition hover:scale-110"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <h3
                data-aos="fade-up"
                className="mt-20 text-center uppercase tracking-wide"
            >
                Cảm ơn quý khách <br /> đã tìm đến MC Gia Phú
            </h3>
            <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mx-auto mt-4 w-full text-center text-base text-gray-700 lg:max-w-[800px]"
            >
                Sự tin tưởng và ủng hộ của quý khách chính là động lực lớn nhất
                để tôi không ngừng nâng cao chất lượng dịch vụ. Tôi mong rằng
                mỗi chương trình đều sẽ là một kỷ niệm đáng nhớ, đầy cảm xúc và
                trọn vẹn. Hẹn gặp lại quý khách trong những sự kiện sắp tới!
            </p>
        </section>
    )
}

export default Feedbacks
