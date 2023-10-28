import UserService from "../service/UserService.ts";

class ControllerPostUser {
  public user: typeof UserService;

  constructor() {
    this.user = UserService;
  }

  public async getUsers(): Promise<string> {
    return this.user.getAllUsers();
  }

  public async createUser(req: Request): Promise<string> {
    return this.user.createUser(req);
  }

  public async getOneUser(req: Request): Promise<string | undefined> {
    return this.user.getUser(req);
  }

  public async updateUser(req: Request): Promise<string | undefined> {
    return this.user.updateUser(req);
  }
}

export default new ControllerPostUser();