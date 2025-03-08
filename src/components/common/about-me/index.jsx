import Image from 'next/image'
import React from 'react'

const personalInfo = [
    { key: 'Họ tên', value: 'Nguyễn Văn Phú' },
    { key: 'Nghệ danh', value: 'Gia Phú' },
    { key: 'Năm sinh', value: '1999' },
    { key: 'Quê quán', value: 'Yên Định, Thanh Hóa' },
    { key: 'Học vấn', value: 'Tốt nghiệp HV MC Văn Minh năm 2019' },
]

const AboutMe = () => {
    return (
        <section
            id="gioi-thieu"
            className="overflow-hidden bg-navy py-10 text-white md:py-20"
        >
            <div className="container relative z-10">
                {/* Tiêu đề */}
                <h2 className="mb-4 text-center uppercase tracking-wide md:text-left">
                    Giới Thiệu
                </h2>
                <p className="mb-16 text-center text-xl font-light text-gray-300 md:text-left">
                    về bản thân
                </p>
                {/* Layout 2 cột */}
                <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-8">
                    {/* Thông tin cá nhân */}
                    <div
                        data-aos="fade-right"
                        className="h-full space-y-5 rounded-xl border-[2px] border-white px-4 py-8 font-body text-lg md:px-10"
                    >
                        {personalInfo.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <span className="w-32 font-light italic text-warmBlue md:w-40">
                                    {item.key}
                                </span>
                                <span className="text-right font-heading text-xl font-semibold">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Ảnh đại diện */}
                    <div data-aos="fade-left" className="relative h-full">
                        <Image
                            src="/assets/images/self-4.jpg"
                            alt="MC Gia Phú"
                            fill
                            className="rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
