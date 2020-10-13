<<<<<<< HEAD
import React, { ReactNode } from 'react'
=======
import React, { Component, ReactNode } from 'react'
>>>>>>> 0466ed117e44c86758d2f4f808fe73fa4436a284

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