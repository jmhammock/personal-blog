import { GrayMatterFile } from "gray-matter";

interface IFileInfo {
    id: string,
    content: GrayMatterFile<string>
}

export type { IFileInfo }