import { PostMatter } from "./PostMatter";

interface IPost {
    metaData: PostMatter;
    id: string;
    content: string;
}

export type { IPost }