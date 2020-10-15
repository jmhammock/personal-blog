import fs from 'fs'
import path from 'path'
import matter, { GrayMatterFile } from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { IPost } from '../models/Post'
import { IPostMatter, PostMatter } from '../models/PostMatter'
import { IRepository } from '../models/Repository'
import { IFileInfo } from '../models/FileInfo'


class PostsRepository implements IRepository<IPost, IPostMatter> {
    srcDir: string = path.join(process.cwd(), 'posts')

    async get(): Promise<Array<IPost>> {
        const rawdata: Array<IFileInfo> = this.getRawFileData()
        return await Promise.all(rawdata.map(async ({id, content}: IFileInfo) => {
            const matterResponse: GrayMatterFile<string> = matter(content)
            const htmlContent: string = await this.getHtmlContent(matterResponse.content)
            const metaData: IPostMatter = this.getMetaData(matterResponse)
            return <IPost>{
                metaData,
                id,
                content: htmlContent
            }
        }))
    }

    async getById(id: string): Promise<IPost> {
        const content: string = fs.readFileSync(path.join(this.srcDir, `${id}.md`), 'utf8')
        const matterResponse: GrayMatterFile<string> = matter(content)
        const htmlContent: string = await this.getHtmlContent(matterResponse.content)
        const metaData: IPostMatter = this.getMetaData(matterResponse)
        return <IPost>{
            metaData,
            id,
            content: htmlContent
        }
    }

    async getByCategory(category: string): Promise<Array<IPost>> {
        const posts = await this.get()
        return posts.filter(p => p.metaData.category == category)
    }

    async getByMonth(month: string): Promise<Array<IPost>> {
        const posts = await this.get()
        return posts.filter(p => (new Date(p.metaData.dateCreated)).toLocaleString('long', { month: 'long'}) == month)
    }

    getRawFileData(): Array<IFileInfo> {
        const filenames: Array<string> = fs.readdirSync(this.srcDir)
        return filenames.map(f => {
            return <IFileInfo>{
                id: f.replace(/\.md$/, ''),
                content: matter(fs.readFileSync(path.join(this.srcDir, f), 'utf8'))
            }
        })
    }

    async getHtmlContent(content: string): Promise<string> {
        const processContent = await remark()
            .use(html)
            .process(content);
        return processContent.toString();
    }

    getMetaData(content: GrayMatterFile<string>): PostMatter {
        return <PostMatter>{
            title: content.data.title,
            dateCreated: content.data.dateCreated,
            category: content.data.category
        }
    }

    async getSorted(): Promise<Array<IPost>> {
        let posts: Array<IPost> = await this.get();
        return posts.sort((a: IPost, b: IPost): number => {
            return a.metaData.dateCreated < b.metaData.dateCreated ? 1 : -1
        })
    }

    getPostIds(): Array<{params: {id: string}}> {
        const fileNames = fs.readdirSync(this.srcDir);
        return fileNames.map(fileName => {
            return {
                params: {
                    id: fileName.replace(/\.md$/i, '')
                }
            }
        })
    }

    getCategoryIds(): Array<{params: {id: string}}> {
        const categories = this.getUniqueMeta('category')
        return categories.map(c => {
            return {
                params: {
                    id: c
                }
            }
        })
    }

    getMonthIds(): Array<{params: {id: string}}> {
        const months = this.getUniqueMeta('dateCreated')
            .map(d => (new Date(d)).toLocaleString('long', { month: 'long' }))
        return months.map(m => {
            return {
                params: {
                    id: m
                }
            }
        })
    }

    getUniqueMeta(key: string): Array<string> {
        const files = this.getRawFileData()
        let unique = new Set<string>()
        files.forEach(f => {
            const metaData = this.getMetaData(f.content)
            if (key in metaData) {
                unique.add(metaData[key])
            }
        })

        return Array.from(unique)
    }

}

const Posts = new PostsRepository()

export { Posts };