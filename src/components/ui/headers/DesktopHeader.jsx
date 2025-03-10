'use client' // cần nếu bạn đang dùng app router của Next.js

import Link from 'next/link'
import { useEffect, useState } from 'react'

export const navItems = [
    { title: 'Giới thiệu', id: '#gioi-thieu' },
    { title: 'Kinh nghiệm', id: '#kinh-nghiem' },
    { title: 'Video thực tế', id: '#video' },
    { title: 'Vì sao', id: '#vi-sao' },
    { title: 'Đánh giá từ KH', id: '#feedbacks' },
]

const DesktopHeader = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScroll = () => {
        const currentScrollY = window.scrollY

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Cuộn xuống => Ẩn
            setIsVisible(false)
        } else {
            // Cuộn lên => Hiện
            setIsVisible(true)
        }

        setLastScrollY(currentScrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return (
        <header
            className={`fixed left-0 top-0 z-[1000] hidden w-full transform rounded-b-xl border border-b-navy border-t-transparent bg-white py-3 shadow-lg transition-transform duration-300 lg:block ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="container">
                <ul className="flex w-full justify-evenly">
                    {navItems.map((nav) => (
                        <Link
                            key={nav.id}
                            href={nav.id}
                            className="font-heading"
                        >
                            {nav.title}
                        </Link>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default DesktopHeader
