import React, { ReactNode } from 'react'

interface NavbarItemProps { 
    children: ReactNode,
}

interface NavbarItemLinkProps {
    href: string,
    title: string,
    children: ReactNode
}

const NavbarItem = ({ children }: NavbarItemProps) => {
    return <div className="navbar-item">{ children }</div>
}

const NavbarItemLink = ({ href, title, children }: NavbarItemLinkProps) => {
    return <a className="navbar-item" href={href} title={title}>{children}</a>
}

export { NavbarItem, NavbarItemLink }