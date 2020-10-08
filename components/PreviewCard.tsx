import React from 'react'
import { IPost } from '../models/Post'
import Card from './Card/Card'
import CardContent from './Card/CardContent'
import CardFooter from './Card/CardFooter'
import CardText from './Card/CardText'
import CardTitle from './Card/CardTitle'

interface PreviewCardProps {
    post: IPost
}

interface ExcerptProps {
    content: string,
    length: number
}

const PreviewCard = ({post}: PreviewCardProps): JSX.Element => {
    return <Card>
        <CardContent>
            <CardContent>
                <CardTitle>{post.metaData.title}</CardTitle>
                <CardText>
                    <Excerpt content={post.content} length={55} />
                </CardText>
                <CardFooter>
                    <a className="btn btn-primary">Read More</a>
                </CardFooter>
            </CardContent>
        </CardContent>
    </Card>
}

const Excerpt = ({content, length}: ExcerptProps): JSX.Element => {
    let cleaned = content.replace(/<\/?[^>]+(>|$)/g, '');
    return <p>{`${cleaned.slice(0, length)}...`}</p>
}

export default PreviewCard;