import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getSortedPosts, getUniquePostMetaData } from '../lib/posts'
import { IPost } from '../models/Post'
import PreviewCard from '../components/PreviewCard'
import Layout from '../components/Layout'

export default function Home({posts, postCategories, postMonths}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout categories={postCategories} months={postMonths}>
        {posts.map((post: IPost) => {
            return <PreviewCard post={post}/> 
        })}
    </Layout>
}

export const getStaticProps: GetStaticProps = async () => {
    const posts: Array<IPost> = await getSortedPosts()
    const postCategories: Array<string> = getUniquePostMetaData('category')
    const postMonths: Array<string> = getUniquePostMetaData('dateCreated')
        .map(stringDate => (new Date(stringDate)).toLocaleString('long', { month: 'long'}))
    return {
        props: {
            posts,
            postCategories,
            postMonths
        }
    }
}