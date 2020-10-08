import React from 'react'

interface CardImageProps {
    src: string,
    altText: string
}

const CardImage = ({src, altText}: CardImageProps) => {
    return <div className="card-image" style={{backgroundImage: src}} title={altText}>
    </div>
}

export default CardImage