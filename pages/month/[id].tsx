import React from 'react';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { Posts } from '../../lib/posts';
import Layout from '../../components/Layout';
import { IPost } from '../../models/Post';
import PreviewCard from '../../components/PreviewCard';

export default function Post({month, posts, categories, months }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return <Layout categories={categories} months={months}>
        <h1>{month.toUpperCase()}</h1>
        {posts.map((post: IPost) => {
            return <PreviewCard post={post}/> 
        })}
    </Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Posts.getMonthIds();
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const month: string = typeof params.id === 'string' ?
        params.id :
        params.id[0]
    const posts = await Posts.getByMonth(month)
    const categories = Posts.getUniqueMeta('category')
    const months = Posts.getUniqueMeta('dateCreated')
        .map(date => (new Date(date)).toLocaleString('long', { month: 'long'}))
    return {
        props: {
            month,
            posts,
            categories,
            months
        }
    }
}
