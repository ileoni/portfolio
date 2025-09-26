import { createRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const useGsapOpacity = (lenght = 0): any[] => {
    const refs = Array(lenght).fill("").map(() => createRef());

    useEffect(() => {
        refs.forEach((ref: any) => {
            if(ref.current === null) return;
            gsap.to(ref.current, {
                scrollTrigger: {
                    trigger: ref.current,
                    toggleActions: "restart none reverse pause"
                },
                opacity: 1,
                duration: 3
            });
        })
    }, [])

    return refs;
}