import { IFile } from "../../../../interfaces/index.ts";

export default class FileEntity implements IFile {
  id?: string;
  name!: string;
}
