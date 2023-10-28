export interface IUserService {
  createUser(req: Request): Promise<string>;

  getUser(req: Request): Promise<string | undefined>;

  getAllUsers(): Promise<string>;

  updateUser(req: Request): Promise<string | undefined>;

  deleteUser(req: Request): Promise<string | undefined>;
}
