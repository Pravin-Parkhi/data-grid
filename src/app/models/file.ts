/**
 * Type representing the status of a file.
 * 
 * "available" - The file is available for operations.
 * "unavailable" - The file is not available for operations.
 */
export type FileStatus = "available" | "unavailable";

/**
 * Interface representing a File object.
 * 
 * Properties:
 * - name: The name of the file.
 * - device: The device on which the file is stored.
 * - path: The file path.
 * - status: The status of the file, which can be either "available" or "unavailable".
 */
export interface File {
    name: string;
    device: string;
    path: string;
    status: FileStatus;
}