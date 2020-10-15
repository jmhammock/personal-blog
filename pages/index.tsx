import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Posts } from '../lib/posts'
import { IPost } from '../models/Post'
import PreviewCard from '../components/PreviewCard'
import Layout from '../components/Layout'

export default function Home({posts, categories, months}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout categories={categories} months={months}>
        {posts.map((post: IPost) => {
            return <PreviewCard post={post}/> 
        })}
    </Layout>
}

export const getStaticProps: GetStaticProps = async () => {
    const posts: Array<IPost> = await Posts.get()
    const categories: Array<string> = Posts.getUniqueMeta('category')
    const months: Array<string> = Posts.getUniqueMeta('dateCreated')
        .map(date => (new Date(date)).toLocaleString('long', {month: 'long'}))
    return {
        props: {
            posts,
            categories,
            months
        }
    }
}