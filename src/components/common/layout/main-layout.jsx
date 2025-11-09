'use client'

import React, { useState } from 'react'

const MainLayout = ({ children }) => {
    return (
        <main>
            <div className="bg-lightBlue">{children}</div>
        </main>
    )
}

export default MainLayout
