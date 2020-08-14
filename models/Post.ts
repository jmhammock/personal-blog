import { PostMatter } from "./PostMatter";

interface Post {
    metaData: PostMatter,
    content: string
}

export type { Post }