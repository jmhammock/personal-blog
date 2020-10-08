import React, { ReactNode } from 'react'

interface MenuProps {
    children: ReactNode
}

const Menu = ({ children }: MenuProps) => <aside className="menu">{ children }</aside>

export default Menu