import Image from 'next/image'
import React from 'react'

const skillsData = [
    {
        title: 'MC Tiệc cưới',
        description:
            'Thế mạnh của tôi là dẫn các chương trình tiệc cưới tại tư gia và nhà hàng, lễ ăn hỏi - nạp tài, lễ thành hôn, lễ vu quy, lễ vow hiện đại. Hỗ trợ tư vấn xây dựng kịch bản chương trình cho từng cặp đôi.',
        images: [
            'wedding-1.jpg',
            'wedding-2.jpg',
            'wedding-3.jpg',
            'wedding-4.jpg',
        ],
        reverse: false,
    },
    {
        title: 'MC Sự kiện',
        list: [
            'Dẫn lễ khai trương, gala dinner, tiệc tất niên, hội khóa, hợp lớp',
            'MC cho các chương trình thực tế, chương trình dành cho thiếu nhi, MC Livestream cho các nhãn hàng',
            'MC cho các chương trình kỷ niệm thành lập công ty, lễ cất nóc, lễ khởi công, lễ khánh thành...',
        ],
        images: ['event-1.jpg', 'event-2.jpg', 'event-3.jpg', 'event-4.jpg'],
        reverse: true,
    },
    {
        title: 'MC Du lịch',
        description:
            'Tổ chức các chương trình Team building, Gala dinner... có ekip hỗ trợ chuyên nghiệp, có thể phục vụ chương trình lên đến hàng ngàn khách',
        images: [
            'teambuilding-1.jpg',
            'teambuilding-2.jpg',
            'teambuilding-3.jpg',
            'teambuilding-4.jpg',
        ],
        reverse: false,
    },
    {
        title: 'MC Sinh nhật, hoạt náo trẻ em',
        list: [
            'Thân thiện, gần gũi với trẻ em.',
            'Kỹ năng hoạt náo tốt, làm chủ sân khấu',
            'Chủ động lên ý tưởng theo sở thích từng bé.',
            'Có kinh nghiệm làm việc với cả phụ huynh & đơn vị tổ chức.',
        ],
        images: [
            'birthday-1.jpg',
            'birthday-2.jpg',
            'birthday-3.jpg',
            'birthday-4.jpg',
        ],
        reverse: true,
    },
]

const Skills = () => {
    return (
        <section
            id="kinh-nghiem"
            className="container bg-lightBlue py-10 text-navy md:py-20"
        >
            <h2 className="mb-4 text-center uppercase tracking-wide md:text-right">
                Kinh nghiệm
            </h2>
            <p className="mb-12 text-center text-xl font-light text-gray-700 md:text-right">
                trong suốt 5 năm hoạt động nghệ thuật
            </p>

            {skillsData.map((item, index) => (
                <div
                    key={index}
                    className={`relative mb-12 flex flex-col md:items-stretch ${
                        item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                    } gap-6 md:gap-8`}
                >
                    {/* Text phần mô tả */}

                    <div
                        data-aos="fade-right"
                        className="relative z-10 flex flex-col items-center justify-center gap-4 md:w-1/3"
                    >
                        {/* Số thứ tự */}
                        <span className="absolute left-0 top-0 font-heading text-[80px] font-bold text-navy opacity-30 md:top-[10%] md:text-[150px]">
                            {index + 1}.
                        </span>
                        <h3
                            data-aos="fade-right"
                            data-aos-delay="100"
                            className="text-center font-semibold md:text-left"
                        >
                            {item.title}
                        </h3>
                        {item.description && (
                            <p className="text-center md:text-left">
                                {item.description}
                            </p>
                        )}
                        {item.list && (
                            <ul className="list-disc pl-5 text-left">
                                {item.list.map((li, i) => (
                                    <li key={i}>{li}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Hình ảnh */}
                    <div
                        data-aos="fade-left"
                        className={`grid w-full grid-cols-2 gap-2 rounded-xl p-2 md:min-h-[480px] ${
                            item.reverse
                                ? 'bg-gradient-to-r from-navy to-lightBlue'
                                : 'bg-gradient-to-l from-warmBlue to-lightBlue'
                        } md:w-2/3`}
                    >
                        {item.images.map((img, i) => (
                            <div
                                key={i}
                                className="relative aspect-[4/3] md:aspect-auto"
                            >
                                <Image
                                    src={`/assets/images/${img}`}
                                    alt={item.title}
                                    fill
                                    className="rounded-xl object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Skills
