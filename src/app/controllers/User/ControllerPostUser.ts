import { UserService } from "../../services/index.ts";

class ControllerPostUser {
  public user: typeof UserService;

  constructor() {
    this.user = UserService;
  }
  public async createUser(req: Request): Promise<string> {
    return this.user.createUser(req);
  }
}

export default new ControllerPostUser();