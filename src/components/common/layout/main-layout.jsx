import React from 'react'
import TheFooter from '@/components/common/the-footer'
import TheHeader from '@/components/common/the-header'
import FloatingContactButtons from '@/components/common/the-contact-btns'

const MainLayout = ({ children }) => {
    return (
        <main>
            <TheHeader />
            <main className="bg-lightBlue">{children}</main>
            <FloatingContactButtons />
            {/* <TheFooter /> */}
        </main>
    )
}

export default MainLayout
