import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
const AnimationWrap = ({render, ratio = 0.25, ratioBack=0.2}) => {
    const ref = useRef();
    const [animate, setAnimate] = useState(null);
    const [change, setChange] = useState(false);

    useEffect(() => {
        let node = ReactDOM.findDOMNode(ref.current);

        const resizeObserver = new ResizeObserver(entries => {
            setChange(true);
            console.log("change");
        });

        resizeObserver.observe(node);

        const onScroll = () => {
            const top = ref.current.getBoundingClientRect().top;
            const bottom = ref.current.getBoundingClientRect().bottom;
            const current = window.scrollY;
            const heightElement = bottom - top;
        
            console.log("p: ", current);
            console.log("top: ", top);
            console.log("ratio: ", ratio);
            if ((top + ratio*heightElement) < window.innerHeight) {
                setAnimate(true);
            } else if((top - window.innerHeight) > ratioBack*heightElement) {
                // setAnimate(false);
            }
            
        }
        
        window.addEventListener('scroll', onScroll);
        return () => {window.removeEventListener('scroll', onScroll); resizeObserver.unobserve(node); }
    }, [ratio, ratioBack])

    return (
        <React.Fragment>
            {render(ref, animate)}
        </React.Fragment>
        
    )
}

export default AnimationWrap;

