'use client'

import React, { useState } from 'react'

const MainLayout = ({ children }) => {
    return (
        <main className="w-full md:max-w-md relative overflow-hidden">
            <div className="bg-lightBlue">{children}</div>
        </main>
    )
}

export default MainLayout
