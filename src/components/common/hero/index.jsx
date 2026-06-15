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
        <section className="relative overflow-hidden">
            {/* Ambient Blobs */}
            <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue/30 blur-[100px]"></div>
            <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-warmBlue/20 blur-[100px]"></div>

            <div className="container relative z-10 flex h-screen max-h-[920px] min-h-[800px] flex-col gap-8 pt-20 pb-10 md:flex-row md:gap-0 md:py-20">
                {/* ảnh avatar */}
                <div
                    data-aos="fade-right"
                    className="h-1/2 w-full md:relative md:h-full md:w-1/2"
                >
                    {/* mobile */}
                    <div className="relative block size-full overflow-hidden rounded-3xl border-2 border-warmBlue shadow-2xl shadow-navy/40 md:hidden">
                        <div
                            className={`relative size-full transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={mobileImages[currentMobileIndex]}
                                className="object-contain object-top"
                                alt="self-mobile"
                                fill
                            />
                        </div>
                    </div>

                    {/* desktop */}
                    {/* Left image */}
                    <div className="absolute bottom-0 left-0 hidden md:block">
                        <div className="h-[420px] w-[300px] overflow-hidden rounded-3xl border-2 border-warmBlue shadow-2xl shadow-navy/40">
                            <div
                                className={`relative size-full transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'
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
                        <div className="relative h-[420px] w-[300px] overflow-hidden rounded-3xl border-2 border-warmBlue shadow-2xl shadow-navy/40">
                            <div
                                className={`relative size-full transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'
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
                    <h1 className="mb-2 block text-center font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-navy to-warmBlue md:text-left drop-shadow-sm">
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
                            className="mt-10 w-fit cursor-pointer rounded-full border border-warmBlue bg-white px-8 py-4 font-heading text-navy transition-all duration-300 hover:bg-warmBlue hover:text-white hover:shadow-lg hover:shadow-warmBlue/50 hover:scale-105"
                        >
                            Liên hệ ngay
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
