export interface IPageProps {
    data: {
        page: {
        id: string
        title: string
        slug: string
        description: string
        image: { id: string; url: string }
        html: string
        }
    }
}