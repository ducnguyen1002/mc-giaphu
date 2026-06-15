import { USER_FB_URL, USER_PHONENUMBER, USER_ZALO_URL } from '@/utils/consts'
import { MessageSquare, PhoneCall } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaMessage } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'

const index = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3">
            {/* Nút Gọi điện */}
            <a
                href={'tel:' + USER_PHONENUMBER}
                className="animate-shake-zoom flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-warmBlue to-blue text-navy shadow-xl shadow-warmBlue/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue/50"
                title="Gọi điện"
            >
                <PhoneCall size={24} />
            </a>

            {/* Nút FB */}
            <a
                href={USER_FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-blue to-lightBlue text-navy shadow-lg shadow-blue/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue/50"
                title="Facebook"
            >
                <FiFacebook size={24} />
            </a>

            {/* Nút Zalo */}
            <a
                href={USER_ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-blue to-lightBlue text-navy shadow-lg shadow-blue/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue/50"
                title="Zalo"
            >
                <MessageSquare size={24} />
            </a>
        </div>
    )
}

export default index
