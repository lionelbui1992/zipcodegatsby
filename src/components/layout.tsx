import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }: { children: React.ReactNode }) => <div className="global-wrapper">
    <Header></Header>
    <main>{children}</main>
    <Footer></Footer>
</div>

export default Layout