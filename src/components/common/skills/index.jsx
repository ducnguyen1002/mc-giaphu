import Image from 'next/image'
import React, { useEffect } from 'react'

const skillsData = [
    {
        title: 'MC Tiệc cưới',
        description:
            'Thế mạnh của tôi là dẫn các chương trình tiệc cưới tại tư gia và nhà hàng, lễ ăn hỏi - nạp tài, lễ thành hôn, lễ vu quy, lễ vow hiện đại. Hỗ trợ tư vấn xây dựng kịch bản chương trình cho từng cặp đôi.',
        images: [
            'wedding-7.jpg',
            'wedding-8.jpg',
            'wedding-9.jpg',
            'wedding-10.jpg',
            'wedding-11.jpg',
            'wedding-12.jpg',
            'wedding-13.jpg',
            'wedding-14.jpg',
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
        images: ['event-1.jpg', 'event-2.jpg', 'event-3.jpg', 'event-4.jpg', 'event-5.jpg', 'event-6.jpg'],
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
            'teambuilding-5.jpg',
            'teambuilding-6.jpg',
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
            'birthday-5.jpg',
            'birthday-6.jpg',
        ],
        reverse: true,
    },
]

const Skills = () => {
    useEffect(() => {
        // Inject Fancybox CSS
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = '/_next/static/css/../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css'
        
        // Use CDN as fallback since local path might not work
        const cdnLink = document.createElement('link')
        cdnLink.rel = 'stylesheet'
        cdnLink.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5/dist/fancybox/fancybox.css'
        document.head.appendChild(cdnLink)

        let FancyboxInstance = null;

        import('@fancyapps/ui').then((module) => {
            FancyboxInstance = module.Fancybox;
            FancyboxInstance.bind('[data-fancybox]', {})
        })

        return () => {
            if (FancyboxInstance) {
                FancyboxInstance.destroy()
            }
            cdnLink.remove()
        }
    }, [])

    return (
        <section
            id="kinh-nghiem"
            className="container bg-lightBlue py-10 text-navy md:py-20"
        >
            <h2 className="mb-4 text-center uppercase tracking-wide md:text-right bg-clip-text text-transparent bg-gradient-to-l from-navy to-warmBlue drop-shadow-sm">
                Kinh nghiệm
            </h2>
            <p className="mb-12 text-center text-xl font-light text-gray-700 md:text-right">
                trong suốt {new Date().getFullYear() - 2019} năm hoạt động nghệ thuật
            </p>

            {skillsData.map((item, index) => (
                <div
                    key={index}
                    className={`relative mb-12 flex flex-col md:items-stretch ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                        } gap-6 md:gap-8`}
                >
                    {/* Text phần mô tả */}

                    <div
                        data-aos="fade-right"
                        className="relative z-10 flex flex-col items-center justify-center gap-4 md:w-1/3"
                    >
                        {/* Số thứ tự */}
                        <span className="absolute -left-4 top-[-20px] z-0 font-heading text-[100px] font-bold text-navy/20 md:left-10 md:top-[-10px] md:text-[150px] pointer-events-none select-none">
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
                        className={`grid w-full grid-cols-2 gap-2 rounded-3xl p-3 shadow-xl shadow-blue/20 md:min-h-[480px] ${item.reverse
                            ? 'bg-gradient-to-r from-navy to-blue/40'
                            : 'bg-gradient-to-l from-warmBlue to-lightBlue'
                            } md:w-2/3`}
                    >
                        {item.images.map((img, i) => {
                            const isHidden = i >= 4
                            const isLastVisible = i === 3 && item.images.length > 4
                            const remaining = item.images.length - 4

                            return (
                                <a
                                    key={i}
                                    href={`/assets/images/${img}`}
                                    data-fancybox={`gallery-${index}`}
                                    className={`relative aspect-[4/3] md:aspect-auto group cursor-pointer overflow-hidden rounded-2xl ${isHidden ? 'hidden' : 'block'
                                        }`}
                                >
                                    <Image
                                        src={`/assets/images/${img}`}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {isLastVisible && (
                                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy/60 backdrop-blur-xs transition-colors group-hover:bg-navy/70">
                                            <span className="text-3xl font-bold text-white md:text-5xl">
                                                +{remaining}
                                            </span>
                                        </div>
                                    )}
                                </a>
                            )
                        })}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Skills
