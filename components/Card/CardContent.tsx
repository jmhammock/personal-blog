import React, { ReactNode } from 'react'

interface CardContentProps {
    children: ReactNode
}

const CardContent = ({children}: CardContentProps) => {
    return <div className="card-content content">
        {children}
    </div>
}

export default CardContent