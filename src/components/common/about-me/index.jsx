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
        <div className="min-h-screen bg-navy text-white">
            <div className="container py-10 lg:py-20">
                {/* Tiêu đề */}
                <h2 className="mb-12 uppercase tracking-wide">Giới Thiệu</h2>

                {/* Layout 2 cột */}
                <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-4 lg:gap-8">
                    {/* Ảnh đại diện */}

                    <Image
                        src="/assets/images/self-4.jpg"
                        alt="MC Gia Phú"
                        objectFit="cover"
                        width={400}
                        height={600}
                        className="col-span-2 hidden rounded-2xl object-cover shadow-lg md:col-span-1 md:block"
                    />

                    {/* Thông tin cá nhân */}
                    <div className="col-span-2 h-full space-y-5 rounded-2xl border-[2px] border-white px-3 py-8 font-body text-lg md:col-span-1">
                        {personalInfo.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <span className="w-32 font-light italic text-warmBlue lg:w-40">
                                    {item.key}
                                </span>
                                <span className="text-right font-heading text-xl font-semibold">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Image
                        src="/assets/images/self-10.jpg"
                        objectFit="cover"
                        alt="MC Gia Phú"
                        width={400}
                        height={600}
                        className="hidden rounded-2xl object-cover shadow-lg md:block"
                    />

                    <Image
                        src="/assets/images/self-9.jpg"
                        objectFit="cover"
                        alt="MC Gia Phú"
                        width={400}
                        height={600}
                        className="hidden rounded-2xl object-cover shadow-lg md:block"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
