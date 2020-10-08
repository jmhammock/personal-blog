import React, { ReactNode } from 'react'

interface CardFooterProps {
    children: ReactNode
}

const CardFooter = ({children}: CardFooterProps) => {
    return <footer className="card-footer">
        {children}
    </footer>
}

export default CardFooter