import React, { ReactNode } from 'react'

interface CardTextProps {
    children: ReactNode
}

const CardText = ({children}: CardTextProps) => {
    return <p className="card-text">{children}</p>
}

export default CardText

