import { Markup } from "telegraf";
import { Command } from "./Command";
import { CALLBACKS } from "../constants/Callbacks";
import { MyContext } from "../../types/context";
import { COMMANDS } from "../constants/Commands";

export class StartCommand extends Command {
  name = "start";
  description = "Start the bot";
  execute(ctx: MyContext) {
    const messageParts = [
      "Welcome to the bot! 🤖\n",
      "Here are the available commands:\n",
      `/${COMMANDS.CLAIMABLE_REWARD} - View user claimable rewards <address>`,
    ].join("\n");

    ctx.reply(messageParts);
  }
}
