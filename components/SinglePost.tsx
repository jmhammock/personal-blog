import React from 'react'
import { IPost } from '../models/Post'

interface SinglePostProps {
    post: IPost
}

const SinglePost = ({ post }: SinglePostProps): JSX.Element => {
    return <div className="content">
        <div className="box">
            <h1>{post.metaData.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
    </div>
}

export default SinglePost