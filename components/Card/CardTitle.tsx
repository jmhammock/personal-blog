import React, { ReactNode } from 'react'

interface CardTitleProps {
    children: ReactNode
}

const CardTitle = ({children}: CardTitleProps) => {
    return <h2 className="card-title">{children}</h2>
}

export default CardTitle;

