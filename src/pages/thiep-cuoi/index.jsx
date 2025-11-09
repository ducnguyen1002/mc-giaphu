import React, { useState, useEffect, useRef } from 'react'
import { Play, Pause, MapPin, Calendar, Heart } from 'lucide-react' // Thêm icon MapPin, Calendar, Heart

// --- Khai báo CSS Custom cho font và màu sắc ---
const COLORS = {
    maroon: '#800000',
    lightBg: '#FAFAFA', // Nền sáng nhẹ
    lightGray: '#D9D9D9',
    darkText: '#4B3B3B',
    softWhite: '#F7F7F7',
}

// --- Helper Component: Divider Ngắn ---
const DecorativeDivider = () => (
    <div className="my-6 flex justify-center">
        <div
            className="h-[1px] w-12 rounded-full"
            style={{ backgroundColor: COLORS.maroon }}
        ></div>
    </div>
)

// --- Component Phát Nhạc Đơn Giản ---
const AudioPlayer = ({ audioUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = true
        }
    }, [])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play().catch((error) => {
                    console.error('Autoplay was prevented:', error)
                })
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className="fixed right-4 top-4 z-50 sm:right-8 sm:top-8">
            <audio ref={audioRef} src={audioUrl} preload="auto" />
            <button
                onClick={togglePlay}
                className="rounded-full p-3 shadow-xl transition duration-300 hover:scale-105 active:scale-95"
                style={{
                    backgroundColor: COLORS.maroon,
                    color: COLORS.softWhite,
                }}
                aria-label={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'}
            >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
        </div>
    )
}

// --- Component cho Tiệc Cưới nghệ thuật ---
const PartyCard = ({ title, date, time, location, mapLink, imageColor }) => {
    return (
        <div className="hover:shadow-maroon/50 relative h-[600px] overflow-hidden rounded-xl shadow-2xl transition duration-500">
            {/* Ảnh nền và Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/self-2.jpg')" }} // Dùng màu placeholder thay cho URL ảnh thực tế
            >
                {/* Overlay gradient tối */}
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1.0) 100%)',
                    }}
                ></div>
            </div>

            {/* Nội dung Text (Luôn ở trên cùng) */}
            <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                <h5 className="font-playfair mb-2 text-2xl font-bold italic drop-shadow-md">
                    {title}
                </h5>

                <div className="mb-1 flex items-center text-lg font-semibold drop-shadow-sm">
                    <Calendar size={18} className="mr-2" />
                    <span>{date}</span>
                </div>

                <p className="font-poppins mb-4 text-lg font-light drop-shadow-sm">
                    Vào lúc: {time}
                </p>

                <p className="font-poppins mb-4 text-sm drop-shadow-sm">
                    Địa điểm: **{location}**
                </p>

                <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-softWhite flex items-center text-sm font-medium underline transition duration-300 hover:no-underline"
                >
                    <MapPin size={16} className="mr-1" />
                    Xem bản đồ & Chỉ đường
                </a>
            </div>
        </div>
    )
}

// --- Component Chính: App ---
const App = () => {
    // Ngày cưới thực tế để đánh dấu trên lịch
    const WEDDING_DATE = 10
    const WEDDING_MONTH = 'Tháng 11' // November

    // Tạo mảng ngày cho lịch (ví dụ cho Tháng 11) - Bắt đầu từ T5
    const calendarDays = [
        0,
        0,
        0,
        0,
        1,
        2,
        3, // Tuần 1
        4,
        5,
        6,
        7,
        8,
        9,
        WEDDING_DATE, // Tuần 2 (10 là T2)
        11,
        12,
        13,
        14,
        15,
        16,
        17, // Tuần 3 (16 là Chủ Nhật)
        18,
        19,
        20,
        21,
        22,
        23,
        24, // Tuần 4
        25,
        26,
        27,
        28,
        29,
        30,
        0, // Tuần 5
    ]

    return (
        <div
            style={{ backgroundColor: COLORS.lightBg, color: COLORS.darkText }}
            className="font-poppins min-h-screen overflow-x-hidden leading-relaxed antialiased"
        >
            <style jsx global>{`
                /* Tải font cho toàn bộ ứng dụng */
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:wght@300;400;600&display=swap');
                .font-playfair {
                    font-family: 'Playfair Display', serif;
                }
                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }
                /* CSS cho thanh kẻ dọc/ngang của section 2 */
                .section-header::before,
                .section-header::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 1px;
                    width: 50px; /* Điều chỉnh kích thước nhỏ hơn */
                    background-color: ${COLORS.maroon};
                    opacity: 0.5;
                }
                .section-header::before {
                    left: -60px;
                }
                .section-header::after {
                    right: -60px;
                }
                @media (max-width: 640px) {
                    .section-header::before,
                    .section-header::after {
                        width: 30px;
                        left: -40px;
                        right: -40px;
                    }
                }
            `}</style>

            {/* Thêm Audio Player (Cần thay thế URL nhạc thực tế) */}
            <AudioPlayer audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" />

            <main>
                {/* 1. Banner (Ảnh, Quote, Gradient Overlay) */}
                <section className="relative h-screen overflow-hidden">
                    {/* Ảnh Cô Dâu Chú Rể (Thay URL ảnh thực tế) */}
                    <div
                        className="absolute inset-0 bg-gray-300 bg-cover bg-center"
                        // Sử dụng placeholder image
                        style={{
                            backgroundImage: "url('/assets/images/self-1.jpg')",
                            backgroundPosition: '50% 30%', // Căn chỉnh ảnh cho mobile
                        }}
                        aria-label="Hình ảnh cô dâu và chú rể"
                    ></div>

                    {/* Overlay Gradient: Từ trong suốt -> Màu nền sáng (lightBg) */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to top, ${COLORS.lightBg} 0%, ${COLORS.lightBg} 15%, transparent 70%)`,
                        }}
                    ></div>

                    {/* Nội dung Banner: Quote nghệ thuật và thông tin */}
                    <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-end px-4 pb-16 text-center">
                        {/* Quote nghệ thuật */}
                        <div
                            style={{ color: COLORS.darkText }}
                            className="border-dark-text/30 border-t pt-8"
                        >
                            <h1 className="font-playfair mb-4 text-5xl font-bold italic leading-none tracking-tight sm:text-6xl">
                                Gia Phú <br /> &
                                <br /> Kim Chi
                            </h1>
                            <p className="font-poppins text-lg font-light uppercase tracking-wider">
                                Save the Date: 10.11.2025
                            </p>
                            <blockquote className="mt-2 text-sm italic opacity-80">
                                &quot;Nơi tình yêu bắt đầu, hành trình hạnh phúc
                                mở ra.&quot;
                            </blockquote>
                        </div>
                    </div>
                </section>

                <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                    {/* 2. Tiêu đề “Wedding” và lời mời */}
                    <section className="pb-12 text-center">
                        <h2
                            style={{ color: COLORS.maroon }}
                            className="font-playfair section-header relative mb-4 inline-block px-4 text-xl uppercase tracking-[0.4em]"
                        >
                            Wedding
                        </h2>

                        <p className="font-poppins mt-4 text-base italic opacity-90">
                            Chúng tôi trân trọng kính mời quý vị và gia đình đến
                            chung vui cùng chúng tôi trong ngày hạnh phúc.
                        </p>
                        <p className="font-poppins mt-2 text-sm uppercase tracking-[0.2em] opacity-70">
                            Nhà Trai | Nhà Gái
                        </p>
                    </section>

                    {/* 3. Thông tin gia đình hai bên */}
                    <section
                        className="border-b border-t py-12"
                        style={{ borderColor: COLORS.lightGray }}
                    >
                        <h4
                            style={{ color: COLORS.maroon }}
                            className="font-playfair mb-10 text-center text-3xl italic"
                        >
                            Trân Trọng Kính Báo
                        </h4>
                        <div className="grid gap-10 md:grid-cols-2">
                            {/* Cột Nhà Trai */}
                            <div
                                className="text-center md:border-r md:pr-10"
                                style={{ borderColor: COLORS.lightGray }}
                            >
                                <h5 className="font-poppins mb-4 text-xl font-semibold uppercase tracking-widest">
                                    Nhà Trai
                                </h5>
                                <p className="font-poppins text-base font-medium">
                                    Ông: Nguyễn Văn Luyến
                                </p>
                                <p className="font-poppins text-base font-medium">
                                    Bà: Nguyễn Thị Hà
                                </p>
                                <p className="font-poppins mt-4 text-sm italic opacity-90">
                                    173 Thôn Quan Yên, Xã Định Hoà
                                </p>
                                <p
                                    className="font-poppins mt-1 text-base font-bold"
                                    style={{ color: COLORS.maroon }}
                                >
                                    Con trai trưởng: Nguyễn Gia Phú
                                </p>
                            </div>
                            {/* Cột Nhà Gái */}
                            <div className="text-center md:pl-10">
                                <h5 className="font-poppins mb-4 text-xl font-semibold uppercase tracking-widest">
                                    Nhà Gái
                                </h5>
                                <p className="font-poppins text-base font-medium">
                                    Phụ thân: Trần Văn Dòng
                                </p>
                                <p className="font-poppins text-base font-medium">
                                    Phụ mẫu: Lê Thị Tám
                                </p>
                                <p className="font-poppins mt-4 text-sm italic opacity-90">
                                    Thôn Yên Thôn, Xã Định Tân
                                </p>
                                <p
                                    className="font-poppins mt-1 text-base font-bold"
                                    style={{ color: COLORS.maroon }}
                                >
                                    Con gái út: Trần Kim Chi
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Thời gian & địa điểm lễ thành hôn */}
                    <section className="py-16 text-center">
                        <h4
                            style={{ color: COLORS.maroon }}
                            className="font-playfair mb-4 text-3xl italic"
                        >
                            Lễ Thành Hôn
                        </h4>
                        <p className="font-poppins flex items-center justify-center text-xl font-semibold tracking-wide">
                            <Heart size={20} className="mr-2 text-red-600" />
                            Thứ Hai, {WEDDING_DATE} {WEDDING_MONTH}, 2025
                        </p>
                        <DecorativeDivider />
                        <p className="font-poppins text-sm italic opacity-80">
                            Nghi thức diễn ra tại gia đình nhà trai.
                        </p>
                    </section>

                    {/* 5. Lịch tháng có trái tim đánh dấu ngày cưới */}
                    <section className="py-12 text-center">
                        <h4
                            style={{ color: COLORS.maroon }}
                            className="font-playfair mb-10 text-3xl italic"
                        >
                            Ngày Lành Tháng Tốt
                        </h4>
                        <div
                            className="mx-auto max-w-md border p-6 shadow-xl"
                            style={{
                                backgroundColor: '#ffffff',
                                borderColor: COLORS.lightGray,
                            }}
                        >
                            <h5
                                style={{ color: COLORS.maroon }}
                                className="font-playfair mb-4 text-3xl italic"
                            >
                                {WEDDING_MONTH} 2025
                            </h5>
                            <div className="font-poppins mb-2 grid grid-cols-7 gap-1 text-sm uppercase tracking-wider">
                                {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map(
                                    (day) => (
                                        <div
                                            key={day}
                                            className="font-semibold"
                                            style={{ color: COLORS.darkText }}
                                        >
                                            {day}
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-base">
                                {calendarDays.map((day, index) => (
                                    <div
                                        key={index}
                                        className={`flex aspect-square items-center justify-center rounded-full p-1 transition duration-300 ${
                                            day === WEDDING_DATE
                                                ? `relative scale-105 transform border border-white font-bold text-white shadow-xl`
                                                : day === 0
                                                  ? 'text-light-gray/50'
                                                  : 'text-dark-text hover:bg-light-gray/50'
                                        }`}
                                        style={
                                            day === WEDDING_DATE
                                                ? {
                                                      backgroundColor:
                                                          COLORS.maroon,
                                                  }
                                                : {}
                                        }
                                    >
                                        {day !== 0 ? day : ''}
                                        {day === WEDDING_DATE && (
                                            <span
                                                className="absolute right-[-8px] top-[-8px] rotate-12 transform text-xl"
                                                style={{
                                                    color: COLORS.softWhite,
                                                }}
                                            >
                                                💌
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 6. Hai cột “Tiệc cưới nhà trai / nhà gái” - ĐÃ CẬP NHẬT NGHỆ THUẬT */}
                    <section
                        className="grid gap-8 border-t py-16 lg:grid-cols-2"
                        style={{ borderColor: COLORS.lightGray }}
                    >
                        {/* Tiệc cưới nhà trai */}
                        <PartyCard
                            title="Tiệc Cưới Nhà Trai"
                            date="Thứ Hai, 10.11.2025"
                            time="18:00 (Đón khách từ 17:30)"
                            location="173 Thôn Quan Yên, Xã Định Hoà"
                            mapLink="#" // Cần thay link bản đồ thực tế
                            imageColor="#C06C84" // Màu nền hồng nhẹ cho tiệc cưới
                        />
                        {/* Tiệc cưới nhà gái */}
                        <PartyCard
                            title="Tiệc Cưới Nhà Gái"
                            date="Chủ Nhật, 16.11.2025"
                            time="11:00 (Đón khách từ 10:30)"
                            location="Thôn Yên Thôn, Xã Định Tân"
                            mapLink="#" // Cần thay link bản đồ thực tế
                            imageColor="#6C5B7B" // Màu nền tím nhẹ cho tiệc cưới
                        />
                    </section>

                    {/* 7. Bộ ảnh cưới và quote tình yêu */}
                    <section className="py-16 text-center">
                        <h2
                            style={{ color: COLORS.maroon }}
                            className="font-playfair mb-12 text-3xl italic"
                        >
                            Khoảnh Khắc Tình Yêu
                        </h2>

                        {/* Grid ảnh 3 cột (Sử dụng placeholder ảnh) */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <div
                                className="h-64 rounded-lg bg-cover bg-center shadow-md"
                                style={{
                                    backgroundImage:
                                        "url('/assets/images/self-1.jpg')",
                                }}
                            ></div>
                            <div
                                className="h-64 rounded-lg bg-cover bg-center shadow-md"
                                style={{
                                    backgroundImage:
                                        "url('/assets/images/self-1.jpg')",
                                }}
                            ></div>
                            <div
                                className="h-64 rounded-lg bg-cover bg-center shadow-md"
                                style={{
                                    backgroundImage:
                                        "url('/assets/images/self-1.jpg')",
                                }}
                            ></div>
                        </div>

                        {/* Quote Tình Yêu */}
                        <blockquote
                            className="mx-auto mt-12 max-w-2xl rounded-lg border-l-4 p-6 shadow-lg"
                            style={{
                                borderColor: COLORS.maroon,
                                backgroundColor: COLORS.softWhite,
                            }}
                        >
                            <blockquote
                                className="font-playfair text-xl italic"
                                style={{ color: COLORS.darkText }}
                            >
                                Trong hành trình vạn dặm của cuộc đời, điều
                                tuyệt vời nhất là tìm thấy một người để cùng
                                nhau bước đi.
                            </blockquote>
                            <footer className="font-poppins mt-3 text-sm opacity-70">
                                ~ Gia Phú & Kim Chi
                            </footer>
                        </blockquote>
                    </section>
                </div>
            </main>

            {/* 8. Phần cảm ơn (footer) nền đỏ đô */}
            <footer
                className="py-12 text-center text-white shadow-inner"
                style={{ backgroundColor: COLORS.maroon }}
            >
                <h2 className="font-playfair mb-4 text-4xl font-light italic">
                    Gia Phú & Kim Chi
                </h2>
                <p className="font-poppins mb-6 text-lg uppercase tracking-widest">
                    Trân Trọng Kính Mời
                </p>
                <p className="font-poppins text-sm opacity-80">
                    Sự hiện diện của Quý vị là niềm vinh hạnh lớn lao cho gia
                    đình chúng tôi.
                </p>
                <p className="font-poppins mt-2 text-xs opacity-70">
                    R.S.V.P: [Số Điện Thoại] | Xin chân thành cảm ơn!
                </p>
            </footer>
        </div>
    )
}

export default App
