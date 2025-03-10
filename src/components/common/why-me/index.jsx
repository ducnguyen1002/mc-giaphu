import { USER_PHONENUMBER } from '@/utils/consts'
import { Badge, Briefcase, Flame, Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FiRepeat } from 'react-icons/fi'

const WhyMe = () => {
    return (
        <section
            id="vi-sao"
            className="container rounded-xl bg-navy py-10 text-white md:py-20"
        >
            {/* Tiêu đề */}
            <h2 className="mb-4 text-center uppercase tracking-wide text-white">
                Vì sao
            </h2>
            <p className="mb-16 text-center text-xl font-light text-gray-300">
                khách hàng lựa chọn MC Gia Phú
            </p>

            {/* Nội dung 3 cột */}
            <div className="grid min-h-[300px] grid-cols-1 gap-12 md:grid-cols-3">
                <div
                    className="flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Flame className="mb-6 size-16 text-white md:size-20" />
                    <h3 className="mb-2 uppercase text-white">Nhiệt huyết</h3>
                    <p className="text-center text-gray-300">
                        Luôn tràn đầy năng lượng, cháy hết mình để khuấy động
                        không khí và kết nối khán giả
                    </p>
                </div>
                <div
                    className="flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <Heart className="mb-6 size-16 text-white md:size-20" />
                    <h3 className="mb-2 uppercase text-white">Tận tâm</h3>
                    <p className="text-center text-gray-300">
                        Chăm chút từng chi tiết, lắng nghe và thấu hiểu mong
                        muốn của chương trình để mang lại trải nghiệm trọn vẹn
                    </p>
                </div>
                <div
                    className="flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <Briefcase className="mb-6 size-16 text-white md:size-20" />
                    <h3 className="mb-2 uppercase text-white">Chuyên nghiệp</h3>
                    <p className="text-center text-gray-300">
                        Tác phong chuẩn mực, xử lý tình huống linh hoạt, làm chủ
                        sân khấu và giữ vững phong độ từ đầu đến cuối
                    </p>
                </div>
            </div>

            {/* cta */}

            <div className="flex justify-center">
                <Link
                    href={'tel:' + USER_PHONENUMBER}
                    className="mt-10 w-fit cursor-pointer rounded border bg-white px-8 py-4 font-heading text-navy transition-all hover:bg-navy hover:text-white"
                >
                    Liên hệ ngay
                </Link>
            </div>
        </section>
    )
}

export default WhyMe
