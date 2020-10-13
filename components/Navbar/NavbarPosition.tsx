import React, { ReactNode } from 'react'

enum Position {
    start = 'navbar-start',
    end = 'navbar-end'
}

interface NavbarMenuPositionProps {
    position: Position,
    children: ReactNode
}

interface NavbarStartEndProps {
    children: ReactNode
}

const NavbarMenuPosition = ({ position, children }: NavbarMenuPositionProps) => {
    return <div className={position.toString()}>
        {children}
    </div>
}

const NavbarStart = ({children}: NavbarStartEndProps) => <NavbarMenuPosition position={Position.start}>{children}</NavbarMenuPosition>
const NavbarEnd = ({children}: NavbarStartEndProps) => <NavbarMenuPosition position={Position.end}>{children}</NavbarMenuPosition>

export {NavbarStart, NavbarEnd}