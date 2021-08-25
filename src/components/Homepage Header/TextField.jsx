import React from 'react'

function TextField({position, content}) {
    return (
        <div className = "text-field" position={position}>
            {content}
        </div>
    )
}

export default TextField
