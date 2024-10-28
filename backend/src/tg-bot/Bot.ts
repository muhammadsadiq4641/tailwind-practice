import { Telegraf, session } from "telegraf";
import { CommandHandler } from "./commands/CommandHandler";
import { CallbackHandler } from "./callbacks/CallbackHandler";
import { MyContext } from "../types/context";
import { LoggingMiddleware } from "./middlewares/LoggingMiddleware";

export class TelegramBot {
  private bot: Telegraf<MyContext>;
  private callbackHandler: CallbackHandler;
  private commandHandler: CommandHandler;
  private logMiddleware: LoggingMiddleware;

  constructor(token: string) {
    this.bot = new Telegraf<MyContext>(token);
    this.bot.use(session());

    this.commandHandler = new CommandHandler(this.bot);
    this.callbackHandler = new CallbackHandler(this.bot);
    this.logMiddleware = new LoggingMiddleware();
    this.initializeBot();
  }

  private initializeBot(): void {
    this.bot.use(this.logMiddleware.handle);
    this.commandHandler.registerCommands();
    this.callbackHandler.registerCallbacks();
  }

  public startBot() {
    console.log("Bot started...");
    this.bot.launch();
  }

  public stopBot(): void {
    console.log("Bot stopped");
    this.bot.stop();
  }
}
