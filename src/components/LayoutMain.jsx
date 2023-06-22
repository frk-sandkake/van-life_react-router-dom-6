import React from "react"
import { Outlet } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"

export default function LayoutMain() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
            <Outlet />
            </main>
            <Footer />
        </div>
    )
}
