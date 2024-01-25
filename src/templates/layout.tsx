import * as React from "react"
import { HeaderWrapper } from "../components/HeaderWrapper"
import { FooterWrapper } from "../components/FooterWrapper"

const Layout = ({ children }: { children: React.ReactNode }) => <div className="global-wrapper">
    <HeaderWrapper />
    <main>{children}</main>
    <FooterWrapper />
</div>

export default Layout