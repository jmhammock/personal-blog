import React, { ReactNode } from 'react'

interface ColumnsProps {
    multiline?: boolean,
    children: ReactNode
}

const Columns = ({ multiline, children }: ColumnsProps) => {
    return <div className={`columns ${multiline ? 'is-multiline' : ''}`}>{children}</div>
}

export default Columns