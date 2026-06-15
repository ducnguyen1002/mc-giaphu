import React, { useState } from 'react'

const MainLayout = ({ children }) => {
    return (
        <main className="w-full relative overflow-hidden">
            <div className="bg-lightBlue">{children}</div>
        </main>
    )
}

export default MainLayout
