import FileService from "../../services/File/FileService.ts";

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
