import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

const TheFooter = () => {
    return (
        <footer className="w-full bg-gray-950">
            <div className="container mx-auto flex flex-col justify-between border border-transparent border-t-gray-500 px-4 pb-6 pt-6 md:flex-row md:px-10 md:pt-12">
                <div className="w-full md:w-1/3 md:w-2/5">
                    <p className="text-base font-semibold text-white md:text-2xl">
                        &quot;Chúc các bạn có những giây phút thư giãn tuyệt vời
                        khi xem phim. Cảm ơn các bạn đã đồng hành cùng chúng
                        tôi!&quot;
                    </p>
                </div>
                <div className="mt-4 flex w-full flex-col justify-between md:mt-0 md:w-1/3 md:w-3/5">
                    <div className="flex flex-wrap justify-center md:justify-end">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                className="mx-2 text-xs text-white md:ml-4 md:text-base md:text-sm"
                                aria-label={item.name}
                                key={item.link}
                                href={item.link}
                            >
                                /{item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-center gap-2 md:mt-0 md:justify-end">
                        {SOCIAL_LINKS.map((item) => (
                            <Link
                                className="ml-0 text-white md:ml-2"
                                aria-label={item.name}
                                key={item.link}
                                href={item.link}
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default TheFooter
