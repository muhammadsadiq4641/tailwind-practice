require("dotenv").config();
("use strict");

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import crons from "./configs/cron-jobs";
import { connectDB } from "./configs/database";
import { initializeSocket } from "./configs/socket";
import BlockchainConstants from "./constants/blockchain";
import BLockchainUtils from "./utils/blockchain-utils";
import { routers } from "./utils/routers";
import { TelegramBot } from "./tg-bot/Bot";

const app = new Hono();

const port = process.env.PORT || 8080;

const server = serve({
  fetch: app.fetch,
  port: Number(port),
});

console.log(`Server is running on port ${port}`);

connectDB();
crons.initializeCronJobs();
initializeSocket(server);

// if (!process.env.BOT_TOKEN) {
//   throw new Error("BOT_TOKEN is not set in the environment variables");
// }

// const botService = new TelegramBot(process.env.BOT_TOKEN);
// botService.startBot();
// process.once("SIGINT", () => botService.stopBot());
// process.once("SIGTERM", () => botService.stopBot());

BLockchainUtils.loadBlockchain(BlockchainConstants.RPC[5], 5);

routers.forEach((router) => {
  app.route("/", router);
});
