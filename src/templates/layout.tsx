import * as React from "react"
import { HeaderWrapper } from "../components/HeaderWrapper"

const Layout = ({ children }: { children: React.ReactNode }) => <div className="global-wrapper">
    <HeaderWrapper />
    <main>{children}</main>
    {/* <Footer /> */}
</div>

export default Layout