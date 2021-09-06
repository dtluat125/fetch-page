import React from 'react'

function Feature({icon, title}) {
    return (
        <div className="how-it-works__feature">
            <div className="how-it-works__feature__icon">
                <img src={icon} alt="" />
            </div>
            <div className="how-it-works__feature__title">{title}</div>
        </div>
    )
}

export default Feature
