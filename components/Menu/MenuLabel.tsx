import React, { ReactNode } from 'react'

interface MenuLabelProps {
    children: ReactNode
}

const MenuLabel = ({children}: MenuLabelProps) => <div className="menu-label">{ children }</div>

export default MenuLabel