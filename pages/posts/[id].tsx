import React from 'react';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { getAllPostIds, getPostData, getUniquePostMetaData } from '../../lib/posts';
import Layout from '../../components/Layout';
import SinglePost from '../../components/SinglePost';

export default function Post({ post, categories, months }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return <Layout categories={categories} months={months}>
        <SinglePost post={post} />
    </Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pageId: string = typeof params.id === 'string' ?
        params.id :
        params.id[0]
    const post = await getPostData(pageId)
    const categories = getUniquePostMetaData('category')
    const months = getUniquePostMetaData('dateCreated')
        .map(stringDate => (new Date(stringDate)).toLocaleString('long', { month: 'long'}))
    return {
        props: {
            post,
            categories,
            months
        }
    }
}
