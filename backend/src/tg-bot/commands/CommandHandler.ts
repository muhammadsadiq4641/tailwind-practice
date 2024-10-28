import fs from "fs";
import path from "path";
import { Telegraf } from "telegraf";
import { Command } from "./Command";
import { MyContext } from "../../types/context";

export class CommandHandler {
  private bot: Telegraf<MyContext>;
  private commands: Command[] = [];

  constructor(bot: Telegraf<MyContext>) {
    this.bot = bot;
    this.loadCommands();
  }

  private loadCommands() {
    const commandsPath = path.join(__dirname, ".");
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith("Command.ts") && file !== "Command.ts");
    for (const file of commandFiles) {
      const commandModule = require(path.join(commandsPath, file));
      const CommandClass = Object.values(commandModule)[0] as any;
      if (CommandClass.prototype instanceof Command) {
        this.commands.push(new CommandClass());
      }
    }
  }

  public registerCommands() {
    this.commands.forEach((command) => {
      this.bot.command(command.name, (ctx) => command.execute(ctx));
    });

    // Set bot commands for the menu
    this.bot.telegram.setMyCommands(
      this.commands.map((cmd) => ({
        command: cmd.name,
        description: cmd.description,
      }))
    );
  }
}
