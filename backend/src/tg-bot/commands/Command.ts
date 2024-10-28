import { MyContext } from "../../types/context";

export abstract class Command {
  abstract name: string;
  abstract description: string;
  abstract execute(ctx: MyContext): void;
}
