import React from "react";
export const ImageAnimation = (props): JSX.Element => {

    const { src, alt, width, height } = props;
    return (
        <div className="animation-image image-box">
            <img src={src} alt={alt} width={width} />
        </div>
    );
};