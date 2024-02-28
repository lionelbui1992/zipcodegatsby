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
        is_dark_section?: string,
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
    isDarkBackground?: string;
}

interface IOurTeamsProps {
    title: string;
    description: string;
    peoples: {
        name: string,
        position: string,
        short_description: string,
        avatar: IImage,
    }[];
}

interface LifeZipCodeProps {
    background: IImage;
    title: string;
    gallery: IImage[];
}

interface IBannerThreeColumnsProps {
    title: string,
    description: string,
    culture_image: IImage,
}

interface IContactInformationProps {
    title: string;
    form_shortcode: string;
}

interface BannerCtaProps {
    background: IImage;
    text: string;
    button: IButton;
}

interface IListingThreeColumnsProps {
    title: string;
    list: {
        content: string
    }[]
}

interface IBannerTextCenterProps {
    background: IImage
    heading: string
}

interface IBoxContentProps {
    title: string;
    description: string;
    button: IButton;
}

interface IGalleryTwoColumnsProps {
    title: string,
    background: string,
    gallery: {
        item_title: string,
        content: string,
        image_1: IImage,
        image_2: IImage
    }[]
}

interface IProjectsBannerProps {
    background_image: IImage | "" | false;
    label: string;
    content: {
        small_text: string;
        line: {
            text: string;
            image: IImage | "" | false;
        }[];
        popup_description: string;
        popup_slider: {
            image: IImage | "" | false;
            text: string;
        }[];
    }[];

}

interface IIntroduceProps {
    title: string;
    image: IImage;
    background: IImage | "";
    background_position: "None" | "Bottom" | "Right";
}

interface ICompanyProps {
    background_section: IImage;
    title: string;
    text_top: string;
    text_middle: string;
    text_bottom: string;
    background_text: IImage;
    owner_image: IImage;
    description: string;
    button: IButton;
}

interface IExploreProps {
    heading: string;
    left_image: IImage;
    right_image: IImage;
    background_right_image: IImage;
    description: string;
    button: IButton;
}

interface IFooterData {
    titleLeft: string | "";
    logoFooter: {
        node: {
        altText: string;
        link: string;
        sourceUrl: string;
        srcSet: string;
        } | "";
    };
    descriptionLeft: string | "";
    email: string | "";
    titleRight: string | "";
    phone: string | "";
    address: IButton | "";
    backgroundDesktop: {
        node: {
        altText: string;
        link: string;
        sourceUrl: string;
        srcSet: string;
        } | "";
    };
    buttonContact: IButton | "";
    codeOfConduct: IButton | "";
    cookiesPolicy: IButton | "";
    privacyPolicy: IButton | "";
    backgroundMobile: {
        node: {
        altText: string;
        link: string;
        sourceUrl: string;
        srcSet: string;
        } | "";
    };
    backgroundSection: {
        node: {
        altText: string;
        link: string;
        sourceUrl: string;
        srcSet: string;
        } | "";
    };
    backgroundSectionMobile: {
        node: {
        altText: string;
        link: string;
        sourceUrl: string;
        srcSet: string;
        } | "";
    };
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
    LifeZipCodeProps,
    IBannerThreeColumnsProps,
    IContactInformationProps,
    BannerCtaProps,
    IListingThreeColumnsProps,
    IBannerTextCenterProps,
    IBoxContentProps,
    IGalleryTwoColumnsProps,
    IProjectsBannerProps,
    IIntroduceProps,
    ICompanyProps,
    IExploreProps,
    IFooterData,
}
