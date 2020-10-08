import React, { ReactNode } from 'react'

interface ColumnProps {
    size?: Number,
    offset?: Number,
    children: ReactNode
}

const Column = ({ size, offset, children }: ColumnProps) => {
    const sizeClass = size ? ` is-${size}` : ''
    const offsetClass = offset ? ` is-offset-${offset}` : ''
    
    return <div className={`column${sizeClass}${offsetClass}`}>
        {children}
    </div>
}

export default Column