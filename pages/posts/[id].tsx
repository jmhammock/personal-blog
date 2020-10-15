import React from 'react';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { Posts } from '../../lib/posts';
import Layout from '../../components/Layout';
import SinglePost from '../../components/SinglePost';

export default function Post({ post, categories, months }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return <Layout categories={categories} months={months}>
        <SinglePost post={post} />
    </Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Posts.getPostIds();
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pageId: string = typeof params.id === 'string' ?
        params.id :
        params.id[0]
    const post = await Posts.getById(pageId)
    const categories = Posts.getUniqueMeta('category')
    const months = Posts.getUniqueMeta('dateCreated')
        .map(date => (new Date(date)).toLocaleString('long', { month: 'long'}))
    return {
        props: {
            post,
            categories,
            months
        }
    }
}
