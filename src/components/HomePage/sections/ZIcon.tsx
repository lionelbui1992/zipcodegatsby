import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const ZIcon = (): JSX.Element => {
    const zicon = useRef(null)

    useEffect(() => {
        let icon = zicon.current
        if (icon) {
            const tl = gsap.timeline({
                repeat: -1,
                yoyo: true,
                ease: "none",

            })

            tl.to(icon, { y: 400, duration: 4 })
            tl.to(icon, { y: 420, x: -50, duration: 2 })
            tl.to(icon, { y: 600, duration: 2 })
            tl.to(icon, { y: 700, x: 50, duration: 2 })
            tl.to(icon, { y: 600, duration: 2 })
            tl.to(icon, { y: 420, x: -50, duration: 2 })
            tl.to(icon, { y: 0, x: -50, duration: 4 })
        }
    }, [zicon])

    return (
        <div className="icon-z"  >
            <svg ref={zicon} xmlns="http://www.w3.org/2000/svg" width="118" height="136" viewBox="0 0 118 136" fill="none">
                <path d="M0.564941 0.181519V13.6738H82.2601L0.564941 60.8401V135.105H117.414V121.557H35.7185L117.414 74.3896V0.181519H0.564941Z" fill="#0068FF" />
            </svg>
        </div>
    );
};


