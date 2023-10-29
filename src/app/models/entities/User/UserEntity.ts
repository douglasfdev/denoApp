import { IUser } from "../../../../interfaces/index.ts";

export default class UserEntity implements IUser {
  id?: string;
  name!: string;
  age!: number;
  sex!: string;
}