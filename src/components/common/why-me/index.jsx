import { Badge, Briefcase, Flame, Heart } from 'lucide-react'
import React from 'react'
import { FiRepeat } from 'react-icons/fi'

const WhyMe = () => {
    return (
        <div className="container rounded-xl bg-navy py-10 text-white md:py-20">
            {/* Tiêu đề */}
            <h2 className="mb-4 text-center uppercase tracking-wide text-white">
                Vì sao
            </h2>
            <p className="mb-16 text-center text-xl font-light text-gray-300">
                khách hàng lựa chọn MC Gia Phú
            </p>

            {/* Nội dung 3 cột */}
            <div className="grid min-h-[300px] grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center">
                    <Flame size={80} className="mb-8 text-white" />
                    <h3 className="mb-4 uppercase text-white">Nhiệt huyết</h3>
                    <p className="text-center text-gray-300">
                        Luôn tràn đầy năng lượng, cháy hết mình để khuấy động
                        không khí và kết nối khán giả
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <Heart size={80} className="mb-8 text-white" />
                    <h3 className="mb-4 uppercase text-white">Tận tâm</h3>
                    <p className="text-center text-gray-300">
                        Chăm chút từng chi tiết, lắng nghe và thấu hiểu mong
                        muốn của chương trình để mang lại trải nghiệm trọn vẹn
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <Briefcase size={80} className="mb-8 text-white" />
                    <h3 className="mb-4 uppercase text-white">Chuyên nghiệp</h3>
                    <p className="text-center text-gray-300">
                        Tác phong chuẩn mực, xử lý tình huống linh hoạt, làm chủ
                        sân khấu và giữ vững phong độ từ đầu đến cuối
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyMe
