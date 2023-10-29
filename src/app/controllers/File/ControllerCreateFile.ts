import { FileService } from "../../services/index.ts";

class ControllerCreateFile {
  private file: typeof FileService;

  constructor() {
    this.file = FileService;
  }

  public createFile(req: Request) {
    return this.file.createFile(req);
  }
}

export default new ControllerCreateFile();
