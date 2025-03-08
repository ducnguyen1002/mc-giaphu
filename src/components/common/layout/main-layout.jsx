'use client'

import React, { useState } from 'react'
import TheFooter from '@/components/common/the-footer'
import TheHeader from '@/components/common/the-header'
import FloatingContactButtons from '@/components/common/the-contact-btns'
import LoadingScreen from '@/components/common/loading-screen'

const MainLayout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <main>
            <TheHeader />
            <div className="overflow-x-hidden overflow-y-hidden bg-lightBlue">
                {children}
            </div>
            <TheFooter />
            <FloatingContactButtons />
            {isLoading && (
                <LoadingScreen onFinish={() => setIsLoading(false)} />
            )}
        </main>
    )
}

export default MainLayout
