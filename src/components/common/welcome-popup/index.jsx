import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { USER_PHONENUMBER } from '@/utils/consts'
import { X, Phone, Sparkles } from 'lucide-react'

const WelcomePopup = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const lastVisit = localStorage.getItem('last_visited_date')
        const today = new Date().toDateString()

        if (lastVisit !== today) {
            const timer = setTimeout(() => {
                setIsOpen(true)
                localStorage.setItem('last_visited_date', today)
                // Trigger animation after mount
                requestAnimationFrame(() => {
                    setTimeout(() => setVisible(true), 20)
                })
            }, 1200)

            return () => clearTimeout(timer)
        }
    }, [])

    const handleClose = () => {
        setVisible(false)
        setTimeout(() => setIsOpen(false), 400)
    }

    if (!isOpen) return null

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-500 ${visible ? 'bg-navy/40 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'
                }`}
            onClick={handleClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ${visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-0'
                    }`}
            >
                {/* Ảnh nền full */}
                <div className="relative aspect-[3/4] w-full">
                    <Image
                        src="/assets/images/self-1.jpg"
                        alt="MC Gia Phú"
                        fill
                        className="object-cover object-top"
                        priority
                    />

                    {/* Gradient overlay từ dưới lên */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />

                    {/* Nút đóng */}
                    <button
                        onClick={handleClose}
                        className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-200 hover:bg-white/40 hover:scale-110"
                        aria-label="Đóng"
                    >
                        <X size={18} />
                    </button>

                    {/* Badge */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                        <Sparkles size={13} className="text-warmBlue" />
                        <span className="text-xs font-semibold text-white">Chào mừng bạn!</span>
                    </div>

                    {/* Nội dung CTA đè lên ảnh ở phía dưới */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="mb-2 font-heading text-2xl font-bold leading-tight uppercase">
                            Book ngay
                            <span className="block bg-gradient-to-r from-warmBlue to-blue bg-clip-text text-transparent">
                                MC Gia Phú
                            </span>
                        </h3>
                        <p className="mb-5 text-sm leading-relaxed text-white/80">
                            Biến sự kiện của bạn thành một kỷ niệm&nbsp;
                            <span className="font-semibold text-white">bùng nổ cảm xúc</span>
                            &nbsp;và chuyên nghiệp đến từng chi tiết. Lịch trình đang được đặt rất nhanh!
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={'tel:' + USER_PHONENUMBER}
                                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-warmBlue to-blue py-3 font-heading font-semibold text-navy shadow-lg shadow-blue/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                            >
                                <Phone size={16} />
                                Liên hệ ngay
                            </a>
                            <button
                                onClick={handleClose}
                                className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                            >
                                Để sau
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePopup
