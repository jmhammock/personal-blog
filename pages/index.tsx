import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getSortedPosts } from '../lib/posts'
import { IPost } from '../models/Post'
import PreviewCard from '../components/PreviewCard'
import Columns from '../components/Columns/Columns'
import Column from '../components/Columns/Column'
import Menu from '../components/Menu/Menu'
import MenuLabel from '../components/Menu/MenuLabel'
import MenuList from '../components/Menu/MenuList'

export default function Home({posts, postCategories}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Columns>
        <Column size={2}>
            <Menu>
                <MenuLabel>Categories</MenuLabel>
                <MenuList>
                    {postCategories.map((cat: string) => {
                        return <li><a>{cat}</a></li>  
                    })}
                </MenuList>
                <MenuLabel>Archive</MenuLabel>
            </Menu>
        </Column>
        <Column size={10}>
            {posts.map((post: IPost) => {
                return <PreviewCard post={post}/> 
            })}
        </Column>
    </Columns>
}

export const getStaticProps: GetStaticProps = async () => {
    const posts: Array<IPost> = await getSortedPosts();
    const postCategories: Array<string> = posts.map(p => p.metaData.category);
    return {
        props: {
            posts,
            postCategories
        }
    }
}