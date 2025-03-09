export type FileStatus = "available" | "unavailable";

export interface File {
    name: string;
    device: string;
    path: string;
    status: FileStatus
}