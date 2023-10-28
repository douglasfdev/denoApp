import { writeCSVObjects } from "https://deno.land/x/csv/mod.ts";

class FileService {
  private name: number = 1;

  private async handleFile(req: Request) {
    const form = await req.formData();
    return Deno.open(form.entries().next().value[this.name], {
      write: true,
      create: true,
      truncate: true,
    });
  }

  public asyncObjectsGenerator = async function* () {
    yield { a: "1", b: "2", c: "3" };
    yield { a: "4", b: "5", c: "6" };
  }

  public async createFile(req: Request) {
    await writeCSVObjects(await this.handleFile(req), this.asyncObjectsGenerator(), {
      header: this.header(),
    })
    return 'file uploaded';
  }

  private header() {
    return [
      'a',
      'b',
      'c'
    ];
  }
}

export default new FileService();
