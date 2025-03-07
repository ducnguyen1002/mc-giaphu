import { QuoteIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className="container flex h-screen max-h-[920px] flex-col py-10 md:flex-row md:py-20">
            {/* ảnh avatar */}
            <div className="h-1/2 w-full md:relative md:h-full md:w-1/2">
                {/* mobile */}
                <div className="relative block size-full overflow-hidden md:hidden">
                    <Image
                        src="/assets/images/self-3.jpg"
                        className="rounded-2xl object-cover object-top"
                        alt="self"
                        fill
                    />
                </div>

                {/* desktop */}
                <div className="absolute bottom-0 left-0 hidden md:block">
                    <div className="h-[420px] w-[300px] overflow-hidden rounded-xl border-2 border-warmBlue">
                        <Image
                            alt="self 1"
                            src="/assets/images/self-2.jpg"
                            width={300}
                            height={480}
                        />
                    </div>
                </div>

                <div className="absolute right-[15%] top-0 hidden md:block">
                    <div className="relative h-[420px] w-[300px] overflow-hidden rounded-xl border-2 border-warmBlue">
                        <Image
                            alt="self 2"
                            src="/assets/images/self-1.jpg"
                            width={300}
                            height={480}
                        />
                    </div>
                </div>
            </div>

            {/* chữ */}
            <div className="flex h-1/2 w-full flex-col justify-center md:h-full md:w-1/2">
                {/* ten */}
                <h1 className="mb-2 block text-center font-bold uppercase text-navy md:text-left">
                    Gia Phú
                </h1>
                <p className="mb-6 text-center font-light md:text-right">
                    MC - Người dẫn chương trình
                </p>

                <div className="relative text-xl font-normal italic">
                    <QuoteIcon className="absolute left-0 top-[-20px] rotate-180 md:left-[-40px]" />
                    Phong cách dẫn của tôi hướng tới sự năng động, trẻ trung,
                    nhiều năng lượng. Bên cạnh đó, tôi cũng hướng tới sự đa dạng
                    trong phong cách để phù hợp với nhiều loại chương trình khác
                    nhau.
                    <QuoteIcon className="absolute bottom-[-20px] right-0 md:right-[-20px]" />
                </div>
            </div>
        </div>
    )
}

export default Hero
