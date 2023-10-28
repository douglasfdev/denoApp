import { IUser, IUserService } from '../../interfaces/index.ts';
class UserService implements IUserService {
  public user: Array<IUser> = [];

  public async createUser(req: Request): Promise<string> {
    const body = await req.json();
    const { name, age, sex } = body;

    if (!name || !age || !sex) {
      return `Campos requeridos: name, age e sex`;
    }

    const data = {
      id: crypto.randomUUID(),
      name,
      age,
      sex
    }

    this.user.push(data);

    return JSON.stringify(data, null, 2);
  }

  public async getUser(req: Request): Promise<string | undefined> {
    const match = req.url.match(/\?id=(.*)/);
    if (!match) return;

    const id = match[1];

    if (!this.user.find((user) => user.id === id)) {
      return `Usuario de id ${id} não encontrado`;
    }

    const user = this.user.find((user) => user.id === id);

    return JSON.stringify(user, null, 2);
  }

  public async getAllUsers(): Promise<string> {
    return JSON.stringify(this.user, null, 2);
  }

  public async updateUser(req: Request): Promise<string | undefined> {
    const match = req.url.match(/\?id=(.*)/);
    if (!match) return;

    const id = match[1];

    if (!this.user.find((user) => user.id === id)) {
      console.log(this.user.find((user) => user.id === id))
      return `Usuario de id ${id} não encontrado`;
    }

    const body = await req.json();
    const { name, age, sex } = body;

    if (!name || !age || !sex) {
      return `Campos requeridos: name, age e sex`;
    }

    const user = this.user.find((user) => user.id === id) as IUser;

    user.name = name;
    user.age = age;
    user.sex = sex;

    return JSON.stringify(user, null, 2);
  }

  public async deleteUser(req: Request): Promise<string | undefined> {
    const match = req.url.match(/\?id=(.*)/);
    if (!match) return;

    const id = match[1];

    const userIndex = this.user.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return `Usuario de id ${id} não encontrado`;
    }

    this.user.splice(userIndex, 1);

    return `Usuario de id ${id} deletado com sucesso`;
  }
}

export default new UserService();
