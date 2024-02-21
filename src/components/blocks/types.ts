interface IImage {
    alt: string,
    class: string,
    decoding: string,
    loading: string,
    sizes: string,
    src: string,
    srcset: string,
}

interface IButton {
    target: string,
    title: string,
    url: string,
}

interface IBannerImageRightProps {
    label: string,
    title: string,
    description: string,
    background: IImage,
    image: IImage,
    isDarkBackground?: boolean,
}

interface NumberTextImageRepeaterProps {
    sections: {
        title: string,
        description: string,
        image: IImage,
        background: IImage,
        isDarkBackground?: boolean,
    }[]
}

interface IBannerTextHasAnimationProps {
    label: string,
    texts: {
        text: string,
        image: IImage | "",
    }[],
}

interface IMarquee {
    background: IImage,
    lists: {
        name: string,
    }[]
}

interface IBoxImageProps {
    order?: string,
    className: string,
    background_position: string,
    image: IImage,
    image_position: string,
    title: string,
    description: string,
    description_mobile: string,
    button: IButton,
}

interface IImageWithTextProps {
    index: number;
    title: string;
    des: string;
    image: IImage;
    backgroundUrl: IImage;
    isDarkBackground: boolean;
}

interface IOurTeamsProps {
    title: string;
    content: string;
    peoples: {
        name: string,
        position: string,
        short_description: string,
        avatar: IImage,
    }[];
}

export {
    IImage,
    IButton,
    IBannerImageRightProps,
    NumberTextImageRepeaterProps,
    IBannerTextHasAnimationProps,
    IMarquee,
    IBoxImageProps,
    IImageWithTextProps,
    IOurTeamsProps,
}
