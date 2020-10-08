import React, { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
}

const Card = ({children}: CardProps) => {
    return <article className="card">
        {children}
    </article>
}

export default Card;