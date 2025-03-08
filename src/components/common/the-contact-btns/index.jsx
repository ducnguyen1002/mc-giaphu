import { USER_PHONENUMBER, USER_ZALO_URL } from '@/utils/consts'
import { MessageSquare, PhoneCall } from 'lucide-react'
import React from 'react'
import { FaMessage } from 'react-icons/fa6'

const index = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3">
            {/* Nút Gọi điện */}
            <a
                href={'tel:' + USER_PHONENUMBER}
                className="animate-shake-zoom flex h-12 w-12 items-center justify-center rounded-full border border-white bg-navy text-white shadow-lg transition-transform hover:scale-110"
                title="Gọi điện"
            >
                <PhoneCall size={24} />
            </a>

            {/* Nút Zalo */}
            <a
                href={USER_ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-navy text-white shadow-lg transition-transform hover:scale-110"
                title="Zalo"
            >
                <MessageSquare size={24} />
            </a>
        </div>
    )
}

export default index
