import React from 'react'
import Lottie from 'react-lottie';

const Animation = ({animationData}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    return (
        <div className=' '>
            <Lottie options={defaultOptions}
                height={400}
                width={400}
               />
        </div>
    )
}

export default Animation