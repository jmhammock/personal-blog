import React, { ReactNode } from 'react'

interface MenuListProps {
    children: ReactNode
}

const MenuList = ({ children }: MenuListProps) => <ul className="menu-list">{ children }</ul>

export default MenuList