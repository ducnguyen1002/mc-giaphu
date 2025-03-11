import Link from 'next/link'
import React from 'react'

const TheFooter = () => {
    return (
        <footer className="flex w-full items-center bg-navy py-8 text-white">
            <div className="container flex flex-col items-center justify-between text-center md:flex-row md:text-left">
                <p className="text-sm">
                    © {new Date().getFullYear()} MC Gia Phú. All rights
                    reserved.
                </p>
                <p className="text-sm">
                    Thiết kế & phát triển bởi{' '}
                    <Link
                        href={'https://facebook.com/ducduc.1002'}
                        className="text-base font-semibold underline"
                    >
                        Đức Đức
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default TheFooter
