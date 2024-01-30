import * as React from "react"
import { Preload, ClipPath } from "../components/Preload"
import { HeaderWrapper } from "../components/HeaderWrapper"
import { FooterWrapper } from "../components/FooterWrapper"

const Layout = ({ children }: { children: React.ReactNode }) => <div className="preload loading">
    <Preload />
    <div className="global-wrapper">
        <HeaderWrapper />
        <main>{children}</main>
        <FooterWrapper />
    </div>
    <ClipPath />
</div>

export default Layout