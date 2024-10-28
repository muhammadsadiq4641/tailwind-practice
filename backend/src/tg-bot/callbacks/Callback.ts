import { MyContext } from "../../types/context";
export abstract class Callback {
  abstract name: string;
  abstract execute(ctx: MyContext): void;
}
