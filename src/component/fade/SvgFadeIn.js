import { useEffect, useRef, useState } from "react";
import "./fadein.css"

function SvgFadeIn({children, direction}) {
    
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    
    return (
        <g className={`fade-in-section fade-in-${direction} ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {children}
        </g>
    )
    
}

export default SvgFadeIn;