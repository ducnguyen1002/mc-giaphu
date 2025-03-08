'use client'

import { useEffect, useState } from 'react'

const LoadingScreen = ({ onFinish }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            setTimeout(onFinish, 800)
        }, 1000)
    }, [onFinish])

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
                isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
        >
            {/* Hai lớp màn hình mở từ giữa */}
            <div className="animate-slide-left absolute left-0 top-0 h-full w-1/2 bg-navy" />
            <div className="animate-slide-right absolute right-0 top-0 h-full w-1/2 bg-navy" />
        </div>
    )
}

export default LoadingScreen
