import { readCSVObjects } from "https://deno.land/x/csv/mod.ts";
import {
  FileRepository,
  UserRepository
} from "../../models/repositories/index.ts";

class FileService {
  private csv: number = 1;
  private userRepository: typeof UserRepository;
  private fileRepository: typeof FileRepository;

  constructor() {
    this.userRepository = UserRepository;
    this.fileRepository = FileRepository;
  }

  private async handleFile(req: Request) {
    const form = await req.formData();
    const csvName = `${Deno.cwd()}/${form.entries().next().value[this.csv].name}`;

    await this.fileRepository.create({
      name: csvName
    });

    return Deno.open(`${csvName}`);
  }

  public async createFile(req: Request) {
    for await (const object of readCSVObjects(await this.handleFile(req))) {
      const userEntity = {
        name: object.name,
        age: Number(object.age),
        sex: object.sex,
      };

      await this.userRepository.createUsers(userEntity);
    }

    return JSON.stringify({
      status: 'Arquivo carregado com sucesso!',
    }, null, 3);
  }

  public async listUsersFromUploadedFile() {
    const users = await this.userRepository.findAll();

    return JSON.stringify(users, null, 2);
  }

  public async listOneUser(req: Request) {
    const match = req.url.match(/\?id=(.*)/);

    if (!match) return;

    const id = match[1];

    const [user] = await this.userRepository.findById(id);

    if (!user) {
      return `Usuário de id ${id} não encontrado`;
    }

    return JSON.stringify(user, null, 2);
  }

  public async updateUser(req: Request) {
    const match = req.url.match(/\?id=(.*)/);

    if (!match) return;

    const id = match[1];

    const [user] = await this.userRepository.findById(id);

    if (!user) {
      return `Usuário de id ${id} não encontrado`;
    }

    const body = await req.json();
    const { name, age, sex } = body;

    if (!name || !age || !sex) {
      return JSON.stringify({
        error: 'Preencha todos os campos!',
        name: 'Campo requerido',
        age: 'Campo requerido',
        sex: 'Campo requerido'
      }, null, 2);
    }

    const data = {
      name,
      age,
      sex
    };

    await this.userRepository.updateUser(id, data);

    user.name = name;
    user.age = age;
    user. sex = sex;

    const userUpdated = user;

    return JSON.stringify(userUpdated, null, 2);
  }

  public async deleteUser(req: Request) {
    const match = req.url.match(/\?id=(.*)/);

    if (!match) return;

    const id = match[1];

    const [user] = await this.userRepository.findById(id);

    if (!user) {
      return `Usuário de id ${id} não encontrado`;
    }

    const body = await req.json();
    const { name, age, sex } = body;

    if (!name || !age || !sex) {
      return JSON.stringify({
        error: 'Preencha todos os campos!',
        name: 'Campo requerido',
        age: 'Campo requerido',
        sex: 'Campo requerido'
      }, null, 2);
    }

    await this.userRepository.deleteUser(id);
    return JSON.stringify({
      success: `usuário de id ${id} deletado com sucesso`,
    }, null, 2);
  }
}

export default new FileService();
