import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
    <footer
        style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
        }}
    >
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <Link to="https://www.gatsbyjs.com">Gatsby</Link>
    </footer>
    )

export default Footer