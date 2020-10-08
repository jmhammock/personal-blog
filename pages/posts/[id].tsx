import React from 'react';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({post}) {
    return <div className="container">
        <div className="section">
           {post.metaData.title}
        </div>
    </div>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const pageId: string = typeof params.id === 'string' ?
        params.id :
        params.id[0];
    const postData = await getPostData(pageId);
    return {
        props: {
            post: postData
        }
    }
}
