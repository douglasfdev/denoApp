import { FileService } from "../../services/index.ts";

class ControllerUpdateUser {
  public file: typeof FileService;

  constructor() {
    this.file = FileService;
  }

  public async updateUser(req: Request): Promise<string | undefined> {
    return this.file.updateUser(req)
  }
}

export default new ControllerUpdateUser();
