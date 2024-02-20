export interface IPageProps {
    data: {
        page: {
            id: string
            title: string
            slug: string
            description: string
            image: { id: string; url: string }
            html: string
            blocks: []
        }
        wpPage?: {
            nodeType: string
            title: string
            uri: string
            seo: {
                title: string
                metaDesc: string
                focuskw: string
                metaKeywords: string
                metaRobotsNoindex: string
                metaRobotsNofollow: string
                opengraphTitle: string
                opengraphDescription: string
                opengraphImage: {
                    altText: string
                    sourceUrl: string
                    srcSet: string
                }
                twitterTitle: string
                twitterDescription: string
                twitterImage: {
                    altText: string
                    sourceUrl: string
                    srcSet: string
                }
                canonical: string
                cornerstone: string
                schema: {
                    articleType: string
                    pageType: string
                    raw: string
                }
            }
        }
        pageDetail?: {
            nodes: {
                title: string
                blocks: []
            } []
        }
    }
}