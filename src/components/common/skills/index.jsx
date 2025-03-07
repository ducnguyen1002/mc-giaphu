import Image from 'next/image'
import React from 'react'

const Skills = () => {
    return (
        <div className="container min-h-screen bg-lightBlue py-10 text-navy lg:py-20">
            {/* Tiêu đề */}
            <h2 className="mb-12 text-right uppercase tracking-wide">
                Kinh nghiệm làm việc
            </h2>

            <div className="mb-8 flex h-[500px] gap-8">
                <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/3">
                    <h3>MC Tiệc cưới</h3>
                    <p className="text-center">
                        Thế mạnh của tôi là dẫn các chương trình tiệc cưới tại
                        tư gia và nhà hàng, lễ ăn hỏi - nạp tài, lễ thành hôn,
                        lễ vu quy, lễ vow hiện đại. Hỗ trợ tư vấn xây dựng kịch
                        bản chương trình cho từng cặp đôi.
                    </p>
                </div>
                <div className="grid w-full grid-cols-3 grid-rows-2 gap-2 rounded-xl bg-gradient-to-l from-warmBlue to-lightBlue p-2 lg:w-2/3">
                    <div className="relative">
                        <Image
                            src={'/assets/images/wedding-1.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/wedding-2.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/wedding-3.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/wedding-4.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/wedding-5.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/wedding-6.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                </div>
            </div>

            <div className="mb-8 flex h-[500px] flex-row-reverse gap-8">
                <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/3">
                    <h3>MC Sự kiện</h3>
                    <ul className="list-disc text-left">
                        <li>
                            Dẫn lễ khai trương, gala dinner, tiệc tất niên, hội
                            khóa, hợp lớp
                        </li>
                        <li>
                            MC cho các chương trình thực tế, chương trình dành
                            cho thiếu nhi, MC Livestream cho các nhãn hàng
                        </li>
                        <li>
                            MC cho các chương trình kỷ niệm thành lập công ty,
                            lễ cất nóc, lễ khởi công, lễ khánh thành...
                        </li>
                    </ul>
                </div>
                <div className="grid w-full grid-cols-3 grid-rows-2 gap-2 rounded-xl bg-gradient-to-r from-navy to-lightBlue p-2 lg:w-2/3">
                    <div className="relative">
                        <Image
                            src={'/assets/images/event-1.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/event-2.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/event-3.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/event-4.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/event-5.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/event-6.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                </div>
            </div>

            <div className="mb-8 flex h-[500px] gap-8">
                <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/3">
                    <h3>MC Du lịch</h3>
                    <p className="text-center">
                        Tổ chức các chương trình Team building, Gala dinner...
                        có ekip hỗ trợ chuyên nghiệp, có thể phục vụ chương
                        trình lên đến hàng ngàn khách
                    </p>
                </div>
                <div className="grid w-full grid-cols-3 grid-rows-2 gap-2 rounded-xl bg-gradient-to-l from-warmBlue to-lightBlue p-2 lg:w-2/3">
                    <div className="relative">
                        <Image
                            src={'/assets/images/teambuilding-1.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/teambuilding-2.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/teambuilding-3.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/teambuilding-4.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/teambuilding-5.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={'/assets/images/teambuilding-6.jpg'}
                            alt="event"
                            className="rounded-xl object-cover"
                            fill
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
