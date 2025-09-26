import { createRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const useGsap = (lenght = 0): any[] => {
    const refs = Array(lenght).fill("").map(() => createRef());

    useEffect(() => {
        refs.forEach((ref: any) => {
            if(ref.current === null) return;
            gsap.to(ref.current, {
                scrollTrigger: {
                    trigger: ref.current,
                    toggleActions: "restart none none pause"
                },
                translateX: 0,
                duration: 1
            });
        })
    }, [])

    return refs;
}