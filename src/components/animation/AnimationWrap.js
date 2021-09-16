import React, { useState, useRef, useLayoutEffect } from 'react';

const AnimationWrap = ({render, ratio = 0.75}) => {
    const ref = useRef(null);
    const [animate, setAnimate] = useState(false);
    
    useLayoutEffect(() => {
        const topPosition = ref.current.getBoundingClientRect().top;
        // const bottomPosition = (element) => element.getBoundingClientRect().bottom;
        const onScroll = () => {
            const scrollPosition = window.scrollY + ratio*window.innerHeight;

            if (topPosition < scrollPosition) {
                setAnimate(true);
            } else {
                setAnimate(false);
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <React.Fragment>
            {render(ref, animate)}
        </React.Fragment>
        
    )
}

export default AnimationWrap;

