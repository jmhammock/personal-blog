import { GrayMatterFile } from "gray-matter";
import { IFileInfo } from "./FileInfo";

interface IRepository<T, U> {
    srcDir: string,
    get: () => Promise<Array<T>>,
    getById: (id: string) => Promise<T>,
    getRawFileData: () => Array<IFileInfo>,
    getHtmlContent: (content: string) => Promise<string>,
    getMetaData: (content: GrayMatterFile<string>) => U,
    getSorted: () => Promise<Array<T>>,
    getUniqueMeta: (key: string) => Array<string>,
}

export type { IRepository }