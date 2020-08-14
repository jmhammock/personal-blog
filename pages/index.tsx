import React from 'react'
import { GetStaticProps } from 'next'
import getSortedPosts from '../lib/posts'
import { Post } from '../models/Post'

export default function Home({ posts }) {
    return  <div className="grid">
        <main>
            {posts.map((post: Post) => {
                return <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{post.metaData.title}</h2>
                        <div className="card-content" dangerouslySetInnerHTML={{__html: post.content}}></div>
                    </div>
                </div>
            })}
        </main>
        <aside>
            <ul>
                {posts.map((post: Post) => {
                    return <li>{post.metaData.category}</li>
                })}
            </ul>
        </aside>
    </div> 
}

export const getStaticProps: GetStaticProps = async (context) => {
    const posts: Array<Post> = await getSortedPosts();
    return {
        props: {
            posts
        }
    }
}