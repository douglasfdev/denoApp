import { UserService } from "../../services/index.ts";

class ControllerGetOneUser {
  public user: typeof UserService;

  constructor() {
    this.user = UserService;
  }

  public async getUser(req: Request): Promise<string | undefined> {
    return this.user.getUser(req);
  }
}

export default new ControllerGetOneUser();
