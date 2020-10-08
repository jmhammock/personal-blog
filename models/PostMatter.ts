import { GrayMatterFile } from "gray-matter";

interface IPostMatter {
    title: string,
    dateCreated: string,
    category: string
}

class PostMatter implements IPostMatter {
    title: string;
    dateCreated: string;
    category: string;

    constructor(title: string, dateCreated: string, category: string) {
        this.title = title;
        this.dateCreated = dateCreated;
        this.category = category;
    }

    static fromMatter(matter: GrayMatterFile<string>): PostMatter {
        return new PostMatter(matter.data.title, matter.data.dateCreated, matter.data.category);
    }

}

export type { IPostMatter };
export { PostMatter }