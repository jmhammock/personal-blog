import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { IPost } from '../models/Post'

const postsDir: string = path.join(process.cwd(), 'posts');

const getSortedPosts = async (): Promise<Array<IPost>> => {
    const fileNames: Array<string> = fs.readdirSync(postsDir)
    const allPostsData: Array<IPost> = await Promise.all(fileNames.map(async (fileName: string): Promise<IPost> => {
        const id: string = fileName.replace(/\.md$/, '')
        const fullPath: string = path.join(postsDir, fileName)
        const fileContents: string = fs.readFileSync(fullPath, 'utf-8')
        const matterRes = matter(fileContents)
        const contentHtml = await getPostContentHtml(matterRes.content)

        return {
            metaData: {
                title: matterRes.data.title,
                dateCreated: matterRes.data.dateCreated,
                category: matterRes.data.category
            },
            id: id,
            content: contentHtml
        }
    }))

    return allPostsData.sort((a: IPost, b: IPost): number => {
        return a.metaData.dateCreated < b.metaData.dateCreated ? 1 : -1
    })
}

const getAllPostIds = () => {
    const fileNames = fs.readdirSync(postsDir);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/i, '')
            }
        }
    })
}

const getPostData = async (id: string): Promise<IPost> => {
    const fullPath = path.join(postsDir, `${id}.md`);
    const fileContents: string = fs.readFileSync(fullPath, 'utf-8');
    const matterRes = matter(fileContents);
    const contentHtml = await getPostContentHtml(matterRes.content);

    return {
        metaData: {
            title: matterRes.data.title,
            dateCreated: matterRes.data.dateCreated,
            category: matterRes.data.category
        },
        id: id,
        content: contentHtml
    }
}

const getPostContentHtml = async (content: string): Promise<string> => {
    const processContent = await remark()
        .use(html)
        .process(content);
    return processContent.toString();
}

const getUniquePostMetaData = (key: string): Array<string> => {
    let entries = new Set<string>()
    fs.readdirSync(postsDir).forEach(fileName => {
        const content: string = fs.readFileSync(path.join(postsDir, fileName), 'utf-8')
        const metaData = matter(content)
        if (metaData.data[key] !== undefined) {
            entries.add(metaData.data[key])
        } 
    })

    return Array.from(entries)
}

export { getSortedPosts, getAllPostIds, getPostData, getUniquePostMetaData };