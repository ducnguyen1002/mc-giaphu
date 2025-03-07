import { QuoteIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='container h-screen flex flex-col lg:flex-row py-10 lg:py-20'>
      {/* ảnh avatar */}
      <div className="lg:relative h-1/2 lg:h-full w-full lg:w-1/2">
        {/* mobile */}
        <div className="size-full relative overflow-hidden block md:hidden">
          <Image src="/assets/images/self-3.jpg" className='rounded-2xl' layout='fill' objectPosition='top' objectFit='cover' alt='self' />
        </div>

        {/* desktop */}
        <div className='absolute bottom-0 left-0 hidden md:block'>
          <div className="relative w-[300px] h-[420px] rounded-2xl border-4 overflow-hidden border-warmBlue">
            <Image
              alt='self 1'
              src="/assets/images/self-2.jpg"
              objectFit='cover'
              objectPosition='left'
              width={300}
              height={480}
            />
          </div>
        </div>

        <div className='absolute right-[15%] top-0 hidden md:block'>
          <div className="relative w-[300px] h-[420px] rounded-2xl border-4 overflow-hidden border-warmBlue">
            <Image
              alt='self 2'
              src="/assets/images/self-1.jpg"
              objectFit='cover'
              objectPosition='left'
              width={300}
              height={480}
            />
          </div>
        </div>


      </div>

      {/* chữ */}
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center">
        {/* ten */}
        <h1 className='text-navy block uppercase mb-2 font-bold text-center lg:text-left'>Gia Phú</h1>
        <p className='mb-6 text-center lg:text-right font-light'>MC - Người dẫn chương trình</p>

        <div className="italic relative text-xl font-normal">
          <QuoteIcon className='rotate-180 absolute top-[-20px] left-0 lg:left-[-40px]' />
          Phong cách dẫn của tôi hướng tới sự năng động, trẻ trung, nhiều năng lượng. Bên cạnh đó, tôi cũng hướng tới sự đa dạng trong phong cách để phù hợp với nhiều loại chương trình khác nhau.
          <QuoteIcon className='absolute bottom-[-20px] right-0 lg:right-[-20px]' />
        </div>
      </div>
    </div>
  )
}

export default Hero