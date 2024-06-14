import React from 'react';
import { gsap } from 'gsap';

export const handleAddPixelateAnimation = () => {
    if (gsap.utils.toArray('.pixelate-container').length > 0) {
        gsap.utils.toArray('.pixelate-container').forEach((item) => {

            let offset = item.getBoundingClientRect().y
            if (offset < innerHeight - 100) {
                item?.animation?.play()

            }
        })
    }
    return false;
}

