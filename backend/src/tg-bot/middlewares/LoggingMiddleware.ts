import { Context, MiddlewareFn } from "telegraf";

const reset = "\x1b[0m";
const bold = "\x1b[1m";
const blue = "\x1b[34m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const red = "\x1b[31m";

export class LoggingMiddleware {
  handle: MiddlewareFn<Context> = async (
    ctx: Context,
    next: () => Promise<void>
  ) => {
    const now = new Date().toISOString();
    let logMessage = `${blue}[${now}]${reset} `;

    if (ctx.message) {
      logMessage += this.logMessage(ctx.message);
    } else if (ctx.callbackQuery) {
      logMessage += this.logCallbackQuery(ctx.callbackQuery);
    } else if (ctx.inlineQuery) {
      logMessage += this.logInlineQuery(ctx.inlineQuery);
    } else {
      logMessage += `${red}Other update type: ${ctx.updateType}${reset}`;
    }

    console.log(logMessage);
    await next();
  };

  private logMessage(message: any): string {
    const from = message.from;
    let content = `${red}Unknown content${reset}`;

    if ("text" in message) {
      content = `${green}"${message.text}"${reset}`;
    } else if ("sticker" in message) {
      content = `${yellow}Sticker${reset}`;
    } else if ("photo" in message) {
      content = `${yellow}Photo${reset}`;
    } else if ("document" in message) {
      content = `${yellow}Document (${message.document.file_name})${reset}`;
    }

    return `${bold}Message${reset} from ${blue}${from?.id}${reset} (${yellow}${
      from?.username || "N/A"
    }${reset}): ${content}`;
  }

  private logCallbackQuery(query: any): string {
    const from = query.from;
    return `${bold}Callback query${reset} from ${blue}${
      from.id
    }${reset} (${yellow}${from.username || "N/A"}${reset}): ${green}"${
      query.data
    }"${reset}`;
  }

  private logInlineQuery(query: any): string {
    const from = query.from;
    return `${bold}Inline query${reset} from ${blue}${
      from.id
    }${reset} (${yellow}${from.username || "N/A"}${reset}): ${green}"${
      query.query
    }"${reset}`;
  }
}
