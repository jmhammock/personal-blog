import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { Post } from '../models/Post'

const postsDir: string = path.join(process.cwd(), 'posts')

const getSortedPosts = async (): Promise<Array<Post>> => {
     const fileNames: Array<string> = fs.readdirSync(postsDir)
     const allPostsData: Array<Post> = await Promise.all(fileNames.map(async (fileName: string): Promise<Post> => {
        const id: string = fileName.replace(/\.md$/, '')
        const fullPath: string = path.join(postsDir, fileName)
        const fileContents: string = fs.readFileSync(fullPath, 'utf-8')
        const matterRes = matter(fileContents)
        const contentHtml = await getPostContentHtml(matterRes.content)

        return {
            metaData: {
                id: id,
                title: matterRes.data.title,
                dateCreated: matterRes.data.dateCreated,
                category: matterRes.data.category
            },
            content: contentHtml
        }
     }))

     return allPostsData.sort((a: Post, b: Post): number => {
         return a.metaData.dateCreated < b.metaData.dateCreated ? 1 : -1
     })
}

const getPostContentHtml = async (content: string): Promise<string> => {
    const processContent = await remark()
        .use(html)
        .process(content)
    return processContent.toString()
}

export default getSortedPosts;