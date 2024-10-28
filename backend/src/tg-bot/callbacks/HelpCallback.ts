import { Callback } from "./Callback";
import { CALLBACKS } from "../constants/Callbacks";
import { MyContext } from "../../types/context";

export class HelpCallback extends Callback {
  name = CALLBACKS.HELP;

  execute(ctx: MyContext) {
    ctx.answerCbQuery("Help selected");
    ctx.reply("This is the help. What would you like to do?");
  }
}
