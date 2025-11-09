'use client'

import React, { useState } from 'react'

const MainLayout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <main>
            <div className="bg-lightBlue">{children}</div>
        </main>
    )
}

export default MainLayout
