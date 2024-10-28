import fs from "fs";
import path from "path";
import { Telegraf } from "telegraf";
import { Callback } from "./Callback";
import { MyContext } from "../../types/context";

export class CallbackHandler {
  private bot: Telegraf<MyContext>;
  private callbacks: Callback[] = [];

  constructor(bot: Telegraf<MyContext>) {
    this.bot = bot;
    this.loadCallbacks();
  }

  private loadCallbacks() {
    const callbacksPath = path.join(__dirname, ".");
    const callbackFiles = fs
      .readdirSync(callbacksPath)
      .filter((file) => file.endsWith("Callback.ts") && file !== "Callback.ts");
    for (const file of callbackFiles) {
      const callbackModule = require(path.join(callbacksPath, file));
      const CallbackClass = Object.values(callbackModule)[0] as any;
      if (CallbackClass.prototype instanceof Callback) {
        this.callbacks.push(new CallbackClass());
      }
    }
  }

  public registerCallbacks() {
    this.callbacks.forEach((callback) => {
      this.bot.action(callback.name, (ctx) => callback.execute(ctx));
    });
  }
}
