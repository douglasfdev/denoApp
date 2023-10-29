import { FileService } from "../../services/index.ts";

class ControllerDeleteUserIntoDb {
  private file: typeof FileService;

  constructor() {
    this.file = FileService;
  }

  public async deleteUser(req: Request) {
    return this.file.deleteUser(req);
  }
}

export default new ControllerDeleteUserIntoDb();
