import React, { ReactNode } from 'react'
import Column from './Columns/Column'
import Columns from './Columns/Columns'
import Menu from './Menu/Menu'
import MenuLabel from './Menu/MenuLabel'
import MenuList from './Menu/MenuList'

interface LayoutProps {
    categories: Array<string>
    months: Array<String>,
    children: ReactNode
}

const Layout = ({ categories, months, children }: LayoutProps): JSX.Element => {
    return <Columns>
        <Column size={2}>
            <Menu>
                <MenuLabel>Categories</MenuLabel>
                <MenuList>
                    {categories.map((cat: string) => {
                        return <li><a>{cat}</a></li>  
                    })}
                </MenuList>
                <MenuLabel>Archive</MenuLabel>
                <MenuList>
                    {months.map((cat: string) => {
                        return <li><a>{cat}</a></li>  
                    })}
                </MenuList>
            </Menu>
        </Column>
        <Column size={10}>
            {children}
        </Column>
    </Columns>
}

export default Layout;