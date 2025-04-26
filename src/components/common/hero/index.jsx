'use client'

import { USER_PHONENUMBER } from '@/utils/consts'
import { QuoteIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const desktopImages = [
    '/assets/images/self-1.jpg',
    '/assets/images/self-2.jpg',
    '/assets/images/self-3.jpg',
    '/assets/images/self-4.jpg',
    '/assets/images/self-5.jpg',
    '/assets/images/self-6.jpg',
]
const mobileImages = [
    '/assets/images/self-1.jpg',
    '/assets/images/self-2.jpg',
    '/assets/images/self-3.jpg',
    '/assets/images/self-4.jpg',
    '/assets/images/self-5.jpg',
    '/assets/images/self-6.jpg',
]

const Hero = () => {
    const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0)
    const [currentMobileIndex, setCurrentMobileIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false) // bắt đầu fade out

            setTimeout(() => {
                // sau khi fade out xong (300ms), đổi ảnh
                setCurrentDesktopIndex(
                    (prev) => (prev + 1) % desktopImages.length
                )
                setCurrentMobileIndex(
                    (prev) => (prev + 1) % mobileImages.length
                )
                setFade(true) // fade in
            }, 300)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="container flex h-screen max-h-[920px] min-h-[800px] flex-col gap-8 py-10 md:flex-row md:gap-0 md:py-20">
            {/* ảnh avatar */}
            <div
                data-aos="fade-right"
                className="h-1/2 w-full md:relative md:h-full md:w-1/2"
            >
                {/* mobile */}
                <div className="relative block size-full overflow-hidden rounded-2xl border-2 border-warmBlue shadow-2xl shadow-navy/40 md:hidden">
                    <div
                        className={`relative size-full transition-opacity duration-500 ${
                            fade ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={mobileImages[currentMobileIndex]}
                            className="object-cover object-top"
                            alt="self-mobile"
                            fill
                        />
                    </div>
                </div>

                {/* desktop */}
                {/* Left image */}
                <div className="absolute bottom-0 left-0 hidden md:block">
                    <div className="h-[420px] w-[300px] overflow-hidden rounded-xl border-2 border-warmBlue shadow-2xl shadow-navy/40">
                        <div
                            className={`relative size-full transition-opacity duration-500 ${
                                fade ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <Image
                                alt="self-left"
                                src={desktopImages[currentDesktopIndex]}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </div>

                {/* Right image */}
                <div className="absolute right-[15%] top-0 hidden md:block">
                    <div className="relative h-[420px] w-[300px] overflow-hidden rounded-xl border-2 border-warmBlue shadow-2xl shadow-navy/40">
                        <div
                            className={`relative size-full transition-opacity duration-500 ${
                                fade ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <Image
                                alt="self-right"
                                src={
                                    desktopImages[
                                        (currentDesktopIndex + 1) %
                                            desktopImages.length
                                    ]
                                }
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* chữ */}
            <div
                data-aos="fade-left"
                className="flex h-1/2 w-full flex-col justify-center md:h-full md:w-1/2"
            >
                {/* tên */}
                <h1 className="mb-2 block text-center font-bold uppercase text-navy md:text-left">
                    Gia Phú
                </h1>
                <p className="mb-6 text-center font-light md:text-right">
                    MC - Người dẫn chương trình
                </p>

                {/* quote */}
                <div className="relative text-center text-xl font-normal italic md:text-left">
                    <QuoteIcon className="absolute left-0 top-[-32px] rotate-180 md:left-[-40px]" />
                    Phong cách dẫn của tôi hướng tới sự năng động, trẻ trung,
                    nhiều năng lượng. Bên cạnh đó, tôi cũng hướng tới sự đa dạng
                    trong phong cách để phù hợp với nhiều loại chương trình khác
                    nhau.
                    <QuoteIcon className="absolute bottom-[-20px] right-0 md:right-[-20px]" />
                </div>

                {/* cta */}
                <div className="flex justify-center md:justify-start">
                    <Link
                        href={'tel:' + USER_PHONENUMBER}
                        className="mt-10 w-fit cursor-pointer rounded border border-navy bg-white px-8 py-4 font-heading text-navy transition-all hover:bg-navy hover:text-white"
                    >
                        Liên hệ ngay
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
