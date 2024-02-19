import * as sections from "../../components/sections"
export interface IHomepageProps {
    data: {
        homepage: {
            id: string
            title: string
            description: string
            image: { id: string; url: string }
            blocks: sections.HomepageBlock[]
        }
    }
}